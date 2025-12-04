import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Router, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {AuthService, SignUpRequest} from '../../../../services/auth';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  isClient = true;
  email = '';
  dni = '';
  ruc = '';
  password = '';
  errorMessage = '';
  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  toggleRole(role: 'client' | 'supplier') {
    this.isClient = role === 'client';
    this.email = '';
    this.dni = '';
    this.ruc = '';
    this.password = '';
    this.errorMessage = '';

  }

  register() {

    // Validaciones básicas
    if (!this.email || !this.dni || !this.password) {
      this.errorMessage = 'Por favor completa todos los campos requeridos';
      return;
    }

    if (!this.isClient && !this.ruc) {
      this.errorMessage = 'El RUC es requerido para proveedores';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const signUpRequest: SignUpRequest = {
      username: this.email,
      password: this.password,
      dni: this.dni,
      ruc: this.isClient ? null : this.ruc,
      roles: [this.isClient ? 'ROLE_SOLICITANTE' : 'ROLE_PROVEEDOR']
    };

    console.log('Enviando registro:', signUpRequest);
    this.authService.signUp(signUpRequest).subscribe({
      next: (response) => {
        console.log('Registro exitoso:', response);
        this.isLoading = false;
        // Redirigir al login
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Error en registro:', error);
        this.isLoading = false;

        // Manejo de errores del backend
        if (error.error?.message) {
          this.errorMessage = error.error.message;
        } else if (error.status === 0) {
          this.errorMessage = 'No se puede conectar con el servidor. Verifica que el backend esté corriendo.';
        } else {
          this.errorMessage = 'Error al registrar usuario. Intenta nuevamente.';
        }
      }
    });

  }
}
