import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthStore } from '../../../application/auth.store';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isClient = true;

  email = '';
  dni = '';
  ruc = '';
  password = '';

  loading = false;
  error: string | null = null;

  constructor(private auth: AuthStore, private router: Router) {}

  toggleRole(role: 'client' | 'supplier') {
    this.isClient = role === 'client';
    this.email = '';
    this.dni = '';
    this.ruc = '';
    this.password = '';
  }

  register() {
    this.error = null;

    if (!this.email || !this.password || !this.dni) {
      this.error = 'Completa todos los campos requeridos.';
      return;
    }

    const payload: any = {
      email: this.email,
      password: this.password,
      dni: this.dni,
      role: this.isClient ? 'client' : 'supplier',
    };

    if (!this.isClient) {
      payload.ruc = this.ruc;
    }

    this.loading = true;

    this.auth.register(payload).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.loading = false;
        this.error = err?.error?.message || 'Error al registrarse.';
      }
    });
  }
}
