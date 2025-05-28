import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { WhyMeComponent } from '../why-me/why-me.component';
import { JustMeComponent } from '../just-me/just-me.component';

@Component({
  selector: 'app-landing-page',
  imports: [MenuComponent, JustMeComponent, MySkillsComponent, WhyMeComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {}
