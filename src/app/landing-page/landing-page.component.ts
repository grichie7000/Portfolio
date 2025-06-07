import { Component} from '@angular/core';
import { StickyMenuComponent } from '../sticky-menu/sticky-menu.component';
import { HeroComponent } from '../hero/hero.component';
import { WhyMeComponent } from '../why-me/why-me.component';
import { MySkillsComponent } from "../my-skills/my-skills.component";
import { MyProjectsComponent } from '../my-projects/my-projects.component';
import { TeamplayerComponent } from '../teamplayer/teamplayer.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { PortfolioFooterComponent } from "../portfolio-footer/portfolio-footer.component";

@Component({
  selector: 'app-landingpage',
  imports: [StickyMenuComponent, HeroComponent, WhyMeComponent, MySkillsComponent,
    MyProjectsComponent, TeamplayerComponent, ContactMeComponent, PortfolioFooterComponent, PortfolioFooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingpageComponent {
}
