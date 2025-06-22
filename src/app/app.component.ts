import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  sections: HTMLElement[] = [];

  ngOnInit() {
    AOS.init();
  }

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
    const scrollY = window.scrollY + 150;
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

    if (scrolledToBottom) {
      document
        .querySelectorAll('.nav-link')
        .forEach((el) => el.classList.remove('active'));
      const contactLink = document.querySelector('.nav-link[href="#contact"]');
      contactLink?.classList.add('active');
      return;
    }
  }
}
