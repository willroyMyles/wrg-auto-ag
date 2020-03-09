import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsSectionComponent } from './parts-section.component';

describe('PartsSectionComponent', () => {
  let component: PartsSectionComponent;
  let fixture: ComponentFixture<PartsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
