import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInPartialComponent } from './login-in-partial.component';

describe('LoginInPartialComponent', () => {
  let component: LoginInPartialComponent;
  let fixture: ComponentFixture<LoginInPartialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginInPartialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginInPartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
