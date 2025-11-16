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
import { MatCheckboxModule } from '@angular/material/checkbox';
import {ControlStore} from '../../../../control/application/control.store';

@Component({
  selector: 'app-conciliations',
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule,
    MatCheckboxModule,
    RouterModule,
  ],
  templateUrl: './conciliations.html',
  styleUrl: './conciliations.css'
})
export class Conciliations {
  constructor(public router: Router) {}

  readonly store = inject(ControlStore);

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  displayedColumns: string[] = ['select', 'order', 'date', 'status', 'action'];
}
