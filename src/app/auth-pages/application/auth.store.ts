import { Injectable, signal, computed, Signal } from '@angular/core';
import { AuthApiEndpoint, LoginResponse } from '../infrastructure/auth/auth-api-endpoint';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

const TOKEN_KEY = 'ft_token';
const USER_KEY = 'ft_user';

@Injectable({ providedIn: 'root' })
export class AuthStore {
  private tokenSignal = signal<string | null>(localStorage.getItem(TOKEN_KEY));
  readonly token = this.tokenSignal.asReadonly();
  readonly isAuthenticated = computed(() => !!this.token());

  private userSignal = signal<any | null>(JSON.parse(localStorage.getItem(USER_KEY) || 'null'));
  readonly user = this.userSignal.asReadonly();

  constructor(private http: HttpClient, private authApi: AuthApiEndpoint) {}

  login(username: string, password: string) {
    return this.authApi.login({ username, password }).pipe(
      tap((res: LoginResponse) => {
        const token = (res as any).token;
        if (token) {
          localStorage.setItem(TOKEN_KEY, token);
          this.tokenSignal.set(token);
        }
        if (res.user) {
          localStorage.setItem(USER_KEY, JSON.stringify(res.user));
          this.userSignal.set(res.user);
        }
      })
    );
  }

  register(payload: any) {
    return this.authApi.register(payload).pipe(
      tap((res: any) => {
        if (res.token) {
          localStorage.setItem(TOKEN_KEY, res.token);
          this.tokenSignal.set(res.token);
        }
        if (res.user) {
          localStorage.setItem(USER_KEY, JSON.stringify(res.user));
          this.userSignal.set(res.user);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    this.tokenSignal.set(null);
    this.userSignal.set(null);
  }

  getToken(): string | null {
    return this.token();
  }
}
