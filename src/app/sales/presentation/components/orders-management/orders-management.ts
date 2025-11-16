import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { Router, RouterModule } from '@angular/router';
import {ControlStore} from '../../../../control/application/control.store';

@Component({
  selector: 'app-orders-management',
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule,
    RouterModule,
  ],
  templateUrl: './orders-management.html',
  styleUrl: './orders-management.css'
})
export class OrdersManagement {
  constructor(private router: Router) {}

  readonly store = inject(ControlStore);

  expandedElement: any | null = null;

  displayedColumns: string[] = [
    'expand',
    'created',
    'user',
    'amount',
    'terminal',
    'id',
  ];

  isActive(route: string): boolean {
    return this.router.url === route;
  }
  isExpandedRow(index: number, row: any): boolean {
    return this.expandedElement === row;
  }
  toggleRow(row: any) {
    this.expandedElement = this.expandedElement?.id === row.id ? null : row;
  }
}
