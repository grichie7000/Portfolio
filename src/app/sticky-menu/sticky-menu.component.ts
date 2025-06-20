import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sticky-menu',
  imports: [],
  templateUrl: './sticky-menu.component.html',
  styleUrl: './sticky-menu.component.scss',
})
export class StickyMenuComponent {
  constructor() {}
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
