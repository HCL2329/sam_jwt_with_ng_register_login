import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayallcoursesComponent } from './displayallcourses.component';

describe('DisplayallcoursesComponent', () => {
  let component: DisplayallcoursesComponent;
  let fixture: ComponentFixture<DisplayallcoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayallcoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayallcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
