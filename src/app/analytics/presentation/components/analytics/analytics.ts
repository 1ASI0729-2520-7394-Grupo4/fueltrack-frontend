import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-analytics',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  templateUrl: './analytics.html',
  styleUrl: './analytics.css'
})
export class Analytics {
  terminals = ['Callao', 'Pisco', 'Lurín'];
  selectedTerminal = 'Callao';
  maxThreshold = 400;

  data = [
    { day: 'Sat', GLP: 50, GNV: 500, Diesel: 210 },
    { day: 'Sun', GLP: 80, GNV: 400, Diesel: 300 },
    { day: 'Mon', GLP: 420, GNV: 100, Diesel: 120 },
    { day: 'Tue', GLP: 500, GNV: 90, Diesel: 190 },
    { day: 'Wed', GLP: 180, GNV: 230, Diesel: 200 },
    { day: 'Thu', GLP: 320, GNV: 470, Diesel: 220 },
    { day: 'Fri', GLP: 300, GNV: 410, Diesel: 330 },
  ];
}
