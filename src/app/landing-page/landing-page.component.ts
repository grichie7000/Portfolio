import { Component, HostListener } from '@angular/core';
import { StickyMenuComponent } from '../sticky-menu/sticky-menu.component';
import { HeroComponent } from '../hero/hero.component';
import { WhyMeComponent } from '../why-me/why-me.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { MyProjectsComponent } from '../my-projects/my-projects.component';
import { TeamplayerComponent } from '../teamplayer/teamplayer.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { PortfolioFooterComponent } from '../portfolio-footer/portfolio-footer.component';

@Component({
  selector: 'app-landingpage',
  imports: [
    StickyMenuComponent,
    HeroComponent,
    WhyMeComponent,
    MySkillsComponent,
    MyProjectsComponent,
    TeamplayerComponent,
    ContactMeComponent,
    PortfolioFooterComponent,
    PortfolioFooterComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingpageComponent {
  sections: HTMLElement[] = [];
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.sections = Array.from(
        document.querySelectorAll(
          '#hero, #why-me, #skills, #projects, #teamplayer, #contact'
        )
      );
    }, 0);
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if (!this.sections.length) {
      return;
    }

    let offset = 250;

    if (window.innerWidth < 1021) {
      offset = 800;
    }

    const scrollY = window.scrollY + offset;
    const firstSection = this.sections[0];
    const firstTop = firstSection.getBoundingClientRect().top + window.scrollY;

    if (scrollY < firstTop) {
      document
        .querySelectorAll('.nav-link')
        .forEach((el) => el.classList.remove('active'));
      return;
    }

    let activeFound = false;

    for (let i = 0; i < this.sections.length; i++) {
      const section = this.sections[i];
      const top = section.getBoundingClientRect().top + window.scrollY;
      const bottom = top + section.getBoundingClientRect().height;
      const id = section.id;

      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      if (!link) continue;

      const isLast = i === this.sections.length - 1;

      if ((scrollY >= top && scrollY < bottom) || (isLast && scrollY >= top)) {
        document
          .querySelectorAll('.nav-link')
          .forEach((el) => el.classList.remove('active'));
        link.classList.add('active');
        activeFound = true;
        break;
      }
    }

    if (!activeFound) {
      document
        .querySelectorAll('.nav-link')
        .forEach((el) => el.classList.remove('active'));
    }

    const scrolledToBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 5;
  }
}
