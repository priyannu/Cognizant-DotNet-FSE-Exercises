import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  providers: [NotificationService],
  templateUrl: './notification.html',
  styleUrl: './notification.css'
})
export class Notification {
  constructor(public notificationService: NotificationService) {}

  addNotification(): void {
    this.notificationService.add(
      'This notification belongs only to this component instance.'
    );
  }

  // Component-level provider creates a separate service instance
  // scoped only to this component and its child components.
}
