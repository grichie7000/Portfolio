import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sticky-menu',
  imports: [TranslateModule],
  templateUrl: './sticky-menu.component.html',
  styleUrl: './sticky-menu.component.scss',
})
export class StickyMenuComponent {
  currentLang: string = 'de';
  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('lang') || 'de';
    this.translate.use(savedLang);
    this.currentLang = savedLang;
  }

  isMenuOpen = false;

  switchLang(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
    localStorage.setItem('lang', lang);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
