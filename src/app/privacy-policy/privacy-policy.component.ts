import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  imports: [],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
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
