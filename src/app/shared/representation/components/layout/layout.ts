import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterModule} from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-layout',
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout implements OnInit {
  navItems: any[] = [];
  userType = '';

  constructor(public router: Router) {}

  navClientItems = [
    { label: 'Admin', icon: 'admin_panel_settings', route: '/client/admin' },
    { label: 'Orders', icon: 'inventory_2', route: '/client/orders' },
    { label: 'Analytics', icon: 'local_shipping', route: '/client/analytics' },
    { label: 'Terminals', icon: 'local_shipping', route: '/client/terminals' },
    { label: 'Notifications', icon: 'bar_chart', route: '/client/notifications' },
    { label: 'Providers', icon: 'notifications', route: '/client/providers' },
    { label: 'Contact us', icon: 'mail', route: '/client/contact' },
  ];

  navSupplierItems = [
    { label: 'Admin', icon: 'admin_panel_settings', route: '/supplier/admin' },
    { label: 'Orders Management', icon: 'inventory_2', route: '/supplier/orders-management' },
    { label: 'Conciliations', icon: 'local_shipping', route: '/supplier/conciliations' },
    { label: 'Dispatch', icon: 'local_shipping', route: '/supplier/dispatch' },
    { label: 'Sales Report', icon: 'bar_chart', route: '/supplier/sales-report' },
    { label: 'Notifications', icon: 'notifications', route: '/supplier/notifications' },
    { label: 'Prices', icon: 'attach_money', route: '/supplier/prices' },
    { label: 'Clients', icon: 'people', route: '/supplier/clients' },
    { label: 'Contact us', icon: 'mail', route: '/supplier/contact' },
  ];

  ngOnInit() {
    this.userType = localStorage.getItem('userType') || 'client';
    console.log(this.userType);
    this.navItems = this.userType === 'client' ? this.navClientItems : this.navSupplierItems;
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
