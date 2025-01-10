import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  isOpen = false

  toggleMenu(): void {
    this.isOpen = !this.isOpen
  }

}
