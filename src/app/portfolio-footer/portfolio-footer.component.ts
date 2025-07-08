import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-footer',
  imports: [],
  templateUrl: './portfolio-footer.component.html',
  styleUrl: './portfolio-footer.component.scss'
})
export class PortfolioFooterComponent {

  constructor(private router:Router){}
  navigateToLegalNotice(){
    this.router.navigateByUrl("/legal-notice")
  }

  navigateToPrivacyPolicy(){
    this.router.navigateByUrl("/privacy-policy")
  }
}
