import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {Router} from '@angular/router';
import {ControlStore} from '../../../../application/control.store';

@Component({
  selector: 'app-terminals',
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './terminals.html',
  styleUrl: './terminals.css'
})
export class Terminals {
  readonly store = inject(ControlStore);

  displayedColumns:string[] = ["id", "name", "location", "active"];
}
