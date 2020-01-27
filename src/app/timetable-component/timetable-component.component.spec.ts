import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableComponentComponent } from './timetable-component.component';

describe('TimetableComponentComponent', () => {
  let component: TimetableComponentComponent;
  let fixture: ComponentFixture<TimetableComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
