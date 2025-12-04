import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AuthService, SignInRequest} from '../../../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isClient = true;
  email = '';
  ruc = '';
  password = '';
  errorMessage = '';
  isLoading = false;

  constructor(private router: Router, private authService: AuthService) {}

  login() {

    // Validar campos
    const username = this.isClient ? this.email : this.ruc;

    if (!username || !this.password) {
      this.errorMessage = 'Por favor completa todos los campos';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const signInRequest: SignInRequest = {
      username: username,
      password: this.password
    };

    console.log('Intentando login:', { username, isClient: this.isClient });

    this.authService.signIn(signInRequest).subscribe({
      next: (response) => {
        console.log('Login exitoso:', response);

        // Guardar el token
        this.authService.saveToken(response.token);

        // Guardar información del usuario si es necesario
        localStorage.setItem('userId', response.id.toString());
        localStorage.setItem('username', response.username);

        this.isLoading = false;

        // Redirigir según el tipo de usuario
        if (this.isClient) {
          console.log('Redirigiendo a /client/orders (Cliente)');
          this.router.navigate(['/client/orders']);
        } else {
          console.log('Redirigiendo a /orders-management (Proveedor)');
          this.router.navigate(['/supplier/orders-management']);
        }
      },
      error: (error) => {
        console.error('Error en login:', error);
        this.isLoading = false;

        if (error.status === 404) {
          this.errorMessage = 'Usuario no encontrado';
        } else if (error.status === 401 || error.error?.message?.includes('Invalid password')) {
          this.errorMessage = 'Contraseña incorrecta';
        } else if (error.status === 0) {
          this.errorMessage = 'No se puede conectar con el servidor.';
        } else {
          this.errorMessage = error.error?.message || 'Error al iniciar sesión. Intenta nuevamente.';
        }
      }
    });
  }

  toggleLogin() {
    this.isClient = !this.isClient;
    this.email = '';
    this.ruc = '';
    this.password = '';
    this.errorMessage = '';
  }
}
