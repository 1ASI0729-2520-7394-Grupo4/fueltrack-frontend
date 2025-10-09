import { Routes } from '@angular/router';
import { LoginComponent } from './auth-pages/presentation/components/login/login.component';
import { RegisterComponent } from './auth-pages/presentation/components/register/register.component';
import { OrdersList } from './control/presentation/components/orders/orders-list/orders-list';
import { Layout } from './shared/representation/components/layout/layout';
import {Terminals} from './control/presentation/components/terminals/terminals/terminals';
import {NotificationsComponent} from './control/presentation/components/notifications/notifications.component';
import {ProvidersComponent} from './control/presentation/components/providers/providers.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: 'fueltrack',
    component: Layout,
    children: [
      { path: 'orders', component: OrdersList },
      { path: 'notifications', component: NotificationsComponent},
      { path: 'terminals', component: Terminals},
      { path: 'providers', component: ProvidersComponent},
    ],
  },

];
