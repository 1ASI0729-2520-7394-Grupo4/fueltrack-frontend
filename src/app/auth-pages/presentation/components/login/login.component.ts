import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthStore } from '../../../application/auth.store';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isClient = true;

  email = '';
  ruc = '';
  password = '';

  loading = false;
  error: string | null = null;

  constructor(private router: Router, private auth: AuthStore) {}

  login() {
    this.error = null;

    const username = this.email;
    const password = this.password;

    if (!username || !password) {
      this.error = 'Completa todos los campos.';
      return;
    }

    this.loading = true;

    this.auth.login(username, password).subscribe({
      next: () => {
        this.loading = false;

        if (this.isClient) {
          this.router.navigate(['/client/orders']);
        } else {
          this.router.navigate(['/supplier/orders-management']);
        }
      },
      error: (err) => {
        this.loading = false;
        this.error =
          err?.error?.message ||
          'Error al iniciar sesión. Intenta nuevamente.';
      }
    });
  }

  toggleLogin() {
    this.isClient = !this.isClient;
    this.email = '';
    this.ruc = '';
    this.password = '';
  }
}
