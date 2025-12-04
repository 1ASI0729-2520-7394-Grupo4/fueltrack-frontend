import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

export interface LoginRequest { username: string; password: string; }
export interface LoginResponse { token: string; user?: any; }
export interface RegisterRequest { username: string; password: string; email?: string; }
export interface RegisterResponse { token?: string; user?: any; }

export class AuthApiEndpoint {
  private readonly baseUrl = `${environment.platformApiBaseUrl}${environment.platformApiAuthBasePath}`;

  constructor(private http: HttpClient) {}

  login(payload: LoginRequest) {
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`, payload);
  }

  register(payload: RegisterRequest) {
    return this.http.post<RegisterResponse>(`${this.baseUrl}/register`, payload);
  }
}
