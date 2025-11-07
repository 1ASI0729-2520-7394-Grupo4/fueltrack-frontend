import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialog } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
import {NewOrder} from '../new-order/new-order';
import {ControlStore} from '../../../../application/control.store';

@Component({
  selector: 'app-orders-list',
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule,
    RouterLink,
  ],
  templateUrl: './orders-list.html',
  styleUrl: './orders-list.css'
})
export class OrdersList {
  readonly store = inject(ControlStore);
  displayedColumns: string[] = [
    'expand',
    'created',
    'user',
    'amount',
    'terminal',
    'id',
    'status',
  ];
  expandedElement: any | null = null;
  toggleRow(row: any) {
    this.expandedElement = this.expandedElement?.id === row.id ? null : row;
  }
  constructor(private dialog: MatDialog) {}

  openOrderWizard(): void {
    this.dialog.open(NewOrder, {
      width: '800px',
      panelClass: 'custom-dialog-container',
    });
  }

  orders = [
    {
      created: '4 APR, 2025',
      user: 'Sebastian Rosas',
      amount: 'S/ 4000.00',
      terminal: 'Callao',
      id: 'O_d1hfg...',
      status: 'Requested',
    },
    {
      created: '4 APR, 2025',
      user: 'Sebastian Rosas',
      amount: 'S/ 4000.00',
      terminal: 'Pisco',
      id: 'O_d2hfg...',
      status: 'Approved',
    },
    {
      created: '12 APR, 2025',
      user: 'Sebastian Rosas',
      amount: 'S/ 4000.00',
      terminal: 'Valero',
      id: 'O_d3hfg...',
      status: 'Released',
    },
    {
      created: '12 APR, 2025',
      user: 'Sebastian Rosas',
      amount: 'S/ 4000.00',
      terminal: 'Valero',
      id: 'O_d4hfg...',
      status: 'Approved',
    },
    {
      created: '18 APR, 2025',
      user: 'Sebastian Rosas',
      amount: 'S/ 4000.00',
      terminal: 'Pisco',
      id: 'O_d5hfg...',
      status: 'Requested',
    },
    {
      created: '18 APR, 2025',
      user: 'Sebastian Rosas',
      amount: 'S/ 4000.00',
      terminal: 'Lurin',
      id: 'O_d6hfg...',
      status: 'Released',
    },
    {
      created: '22 APR, 2025',
      user: 'Sebastian Rosas',
      amount: 'S/ 4000.00',
      terminal: 'Pisco',
      id: 'O_d7hfg...',
      status: 'Approved',
    },
    {
      created: '23 APR, 2025',
      user: 'Sebastian Rosas',
      amount: 'S/ 4000.00',
      terminal: 'Lurin',
      id: 'O_d8hfg...',
      status: 'Closed',
    },
    {
      created: '28 APR, 2025',
      user: 'Sebastian Rosas',
      amount: 'S/ 4000.00',
      terminal: 'Pisco',
      id: 'O_d9hfg...',
      status: 'Approved',
    },
    {
      created: '28 APR, 2025',
      user: 'Sebastian Rosas',
      amount: 'S/ 4000.00',
      terminal: 'Lurin',
      id: 'O_d10hfg...',
      status: 'Closed',
    },
    {
      created: '30 APR, 2025',
      user: 'Sebastian Rosas',
      amount: 'S/ 4000.00',
      terminal: 'Pisco',
      id: 'O_d11hfg...',
      status: 'Closed',
    },
  ];
}
