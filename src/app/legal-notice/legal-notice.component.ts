import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-legal-notice',
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss',
})
export class LegalNoticeComponent {

    constructor(private router:Router){}
  navigateToLegalNotice(){
    this.router.navigateByUrl("/legal-notice")
  }

  navigateToPrivacyPolicy(){
    this.router.navigateByUrl("/privacy-policy")
  }

    navigateToMainpage(){
    this.router.navigateByUrl("/landing-page")
  }
}
