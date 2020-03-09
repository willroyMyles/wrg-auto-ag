import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaregoryPartialComponent } from './caregory-partial.component';

describe('CaregoryPartialComponent', () => {
  let component: CaregoryPartialComponent;
  let fixture: ComponentFixture<CaregoryPartialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaregoryPartialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaregoryPartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
