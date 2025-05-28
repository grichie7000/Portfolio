import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustMeComponent } from './just-me.component';

describe('JustMeComponent', () => {
  let component: JustMeComponent;
  let fixture: ComponentFixture<JustMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JustMeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JustMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
