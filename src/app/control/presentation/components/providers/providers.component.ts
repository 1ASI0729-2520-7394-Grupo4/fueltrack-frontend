import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-providers',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './providers.component.html',
  styleUrl: './providers.component.css'
})
export class ProvidersComponent {
  providers = [
    { name: 'PetroFuel S.A.', fuelType: 'GLP', status: 'Active', note: 'Main supplier for Callao terminal.' },
    { name: 'GasAndes Perú', fuelType: 'Diesel B50', status: 'Inactive', note: 'Pending documentation update.' },
    { name: 'EcoGas', fuelType: 'GNV', status: 'Active', note: 'New contract signed last month.' }
  ];
}
