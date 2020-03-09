import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeJumboComponent } from './welcome-jumbo.component';

describe('WelcomeJumboComponent', () => {
  let component: WelcomeJumboComponent;
  let fixture: ComponentFixture<WelcomeJumboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeJumboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeJumboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
