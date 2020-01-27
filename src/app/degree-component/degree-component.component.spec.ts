import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeComponentComponent } from './degree-component.component';

describe('DegreeComponentComponent', () => {
  let component: DegreeComponentComponent;
  let fixture: ComponentFixture<DegreeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DegreeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
