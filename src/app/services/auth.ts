import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SignUpRequest {
  username: string;
  password: string;
  dni: string;
  ruc?: string | null;
  roles: string[];
}

export interface SignInRequest {
  username: string;
  password: string;
}

export interface UserResource {
  id: number;
  username: string;
  roles: string[];
}

export interface AuthResponse {
  id: number;
  username: string;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/v1/authentication';

  constructor(private http: HttpClient) {}

  signUp(request: SignUpRequest): Observable<UserResource> {
    return this.http.post<UserResource>(`${this.apiUrl}/sign-up`, request);
  }

  signIn(request: SignInRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/sign-in`, request);
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
