import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  imports: [TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {
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

  navigateToLegalNotice() {
    this.router.navigateByUrl('/legal-notice');
  }

  navigateToMainpage() {
    this.router.navigateByUrl('/landing-page');
  }
}
