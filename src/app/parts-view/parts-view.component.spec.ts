import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsViewComponent } from './parts-view.component';

describe('PartsViewComponent', () => {
  let component: PartsViewComponent;
  let fixture: ComponentFixture<PartsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
