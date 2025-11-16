import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { Router, RouterModule } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import {ControlStore} from '../../../../control/application/control.store';

@Component({
  selector: 'app-dispatch',
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule,
    RouterModule,
  ],
  templateUrl: './dispatch.html',
  styleUrl: './dispatch.css'
})
export class Dispatch {
  constructor(private router: Router) {}

  readonly store = inject(ControlStore);

  displayedColumns: string[] = [
    'select',
    'created',
    'user',
    'amount',
    'terminal',
    'release',
    'id',
  ];

  selection = new SelectionModel<any>(true, []);

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  isAllSelected(): boolean {
    return this.selection.selected.length === this.store.orders().length;
  }

  toggleAll(event: { checked: boolean }): void {
    event.checked
      ? this.selection.select(...this.store.orders())
      : this.selection.clear();
  }

  toggleOne(row: any): void {
    this.selection.toggle(row);
  }
}
