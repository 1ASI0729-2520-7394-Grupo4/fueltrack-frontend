import { Routes } from '@angular/router';
import { LoginComponent } from './auth-pages/presentation/components/login/login.component';
import { RegisterComponent } from './auth-pages/presentation/components/register/register.component';
import { OrdersList } from './control/presentation/components/orders/orders-list/orders-list';
import { Layout } from './shared/representation/components/layout/layout';
import { Terminals} from './control/presentation/components/terminals/terminals/terminals';
import { NotificationsComponent} from './control/presentation/components/notifications/notifications.component';
import { ProvidersComponent} from './control/presentation/components/providers/providers.component';
import { Report } from './sales/presentation/components/report/report.component'
import {OrdersManagement} from './sales/presentation/components/orders-management/orders-management';
import {Analytics} from './analytics/presentation/components/analytics/analytics';
import {Dispatch} from './sales/presentation/components/dispatch/dispatch';
import {Conciliations} from './planning/presentation/components/conciliations/conciliations';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'client',
    component: Layout,
    children: [
      { path: 'orders', component: OrdersList },
      { path: 'analytics', component: Analytics },
      { path: 'notifications', component: NotificationsComponent},
      { path: 'terminals', component: Terminals},
      { path: 'providers', component: ProvidersComponent},
      { path: 'sales-report', component: Report },
    ],
  },
  {
    path: 'supplier',
    component: Layout,
    children: [
      { path: 'orders-management', component: OrdersManagement },
      { path: 'conciliations', component: Conciliations },
      { path: 'dispatch', component: Dispatch },
      //{ path: 'prices', component: Prices },
      //{ path: 'clients', component: Clients },
    ]
  }

];
