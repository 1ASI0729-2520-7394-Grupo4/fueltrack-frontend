import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';

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
  terminals = [
    { name: 'Terminal Callao', location: 'Callao', active: true },
    { name: 'Terminal Pisco', location: 'Pisco', active: true },
    { name: 'Terminal Lurín', location: 'Lima Sur', active: false }
  ];
}
