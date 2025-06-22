import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss'],
})
export class MySkillsComponent implements OnInit {
  isMobile: boolean = false;
  isTouchDevice: boolean = false;

  ngOnInit(): void {
    this.checkScreenSize();
    this.detectTouchDevice(); 
  }

  @HostListener('window:resize', [])
  onResize(): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    this.isMobile = window.innerWidth <= 1020;
  }

  private detectTouchDevice(): void {
    this.isTouchDevice = 
      'ontouchstart' in window || navigator.maxTouchPoints > 0;      
  }
}

