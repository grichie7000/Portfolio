import { Component} from '@angular/core';
import { StickyMenuComponent } from '../sticky-menu/sticky-menu.component';
import { HeroComponent } from '../hero/hero.component';
import { WhyMeComponent } from '../why-me/why-me.component';
import { MySkillsComponent } from "../my-skills/my-skills.component";

@Component({
  selector: 'app-landingpage',
  imports: [StickyMenuComponent, HeroComponent, WhyMeComponent, MySkillsComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingpageComponent {
}
