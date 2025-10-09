import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {
  notifications = [
    {
      date: 'Today',
      items: [
        { title: 'Order Completed', message: 'Order #3421 has been successfully dispatched.', type: 'success' },
        { title: 'Low Stock Warning', message: 'GNV stock at Lurín terminal is below 10%.', type: 'warning' }
      ]
    },
    {
      date: 'Yesterday',
      items: [
        { title: 'Login Attempt', message: 'New login detected from a new device.', type: 'info' },
        { title: 'System Error', message: 'Payment service was temporarily unavailable.', type: 'error' }
      ]
    }
  ];

  getIcon(type: string): string {
    switch (type) {
      case 'success': return 'check_circle';
      case 'info': return 'info';
      case 'warning': return 'warning';
      case 'error': return 'error';
      default: return 'notifications';
    }
  }
}
