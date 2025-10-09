import { Routes } from '@angular/router';
import { LoginComponent } from './auth-pages/presentation/components/login/login.component';
import { RegisterComponent } from './auth-pages/presentation/components/register/register.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
