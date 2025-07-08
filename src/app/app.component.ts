import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule,TranslateService } from '@ngx-translate/core';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    AOS.init();
  }
    constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }
}
