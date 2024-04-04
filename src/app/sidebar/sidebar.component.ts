import { Component } from '@angular/core';
import { UserDropdownComponent } from '../user-dropdown/user-dropdown.component';
import { NotificationDropdownComponent } from '../notification-dropdown/notification-dropdown.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [UserDropdownComponent, NotificationDropdownComponent, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  collapseShow = "hidden";
  toggleCollapseShow(classes: string) {
    this.collapseShow = classes;
  }
}
