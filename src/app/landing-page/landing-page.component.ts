import { Component} from '@angular/core';
import { StickyMenuComponent } from '../sticky-menu/sticky-menu.component';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-landingpage',
  imports:[StickyMenuComponent, HeroComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingpageComponent {
}
