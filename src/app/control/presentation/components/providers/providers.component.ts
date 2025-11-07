import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {ControlStore} from '../../../application/control.store';

@Component({
  selector: 'app-providers',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './providers.component.html',
  styleUrl: './providers.component.css'
})
export class ProvidersComponent {
  readonly store = inject(ControlStore);
}
