import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-legal-notice',
  imports: [TranslateModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss',
})
export class LegalNoticeComponent {
  currentLang: string = 'de';
  constructor(private router: Router, private translate: TranslateService) {
    const savedLang = localStorage.getItem('lang') || 'de';
    this.translate.use(savedLang);
    this.currentLang = savedLang;
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
    localStorage.setItem('lang', lang);
  }

  navigateToPrivacyPolicy() {
    this.router.navigateByUrl('/privacy-policy');
  }

  navigateToMainpage() {
    this.router.navigateByUrl('/landing-page');
  }
}
