import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraininingdetailsComponent } from './traininingdetails.component';

describe('TraininingdetailsComponent', () => {
  let component: TraininingdetailsComponent;
  let fixture: ComponentFixture<TraininingdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraininingdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraininingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
