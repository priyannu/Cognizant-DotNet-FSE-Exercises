import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  SimpleChange,
  SimpleChanges
} from '@angular/core';

import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import {
  MockStore,
  provideMockStore
} from '@ngrx/store/testing';

import {
  beforeEach,
  describe,
  expect,
  it,
  vi
} from 'vitest';

import { CourseCard } from './course-card';
import { Course } from '../../models/course.model';

describe('CourseCard', () => {
  let component: CourseCard;
  let fixture: ComponentFixture<CourseCard>;
  let store: MockStore;

  const mockCourse: Course = {
    id: 1,
    name: 'Data Structures',
    code: 'CS101',
    credits: 4,
    gradeStatus: 'passed'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCard],
      providers: [
        provideRouter([]),

        provideMockStore({
          initialState: {
            enrollments: {
              enrolledCourseIds: []
            }
          }
        })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCard);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);

    component.course = mockCourse;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should render the course name from the input', () => {
    fixture.detectChanges();

    const heading =
      fixture.debugElement.query(By.css('h3'))
        .nativeElement as HTMLElement;

    expect(heading.textContent).toContain(
      'Data Structures'
    );
  });

  it('should emit the course id when Enroll is clicked', () => {
    const emitSpy = vi.spyOn(
      component.enrollRequested,
      'emit'
    );

    fixture.detectChanges();

    const enrollButton =
      fixture.debugElement.query(By.css('button'))
        .nativeElement as HTMLButtonElement;

    enrollButton.click();
    fixture.detectChanges();

    expect(emitSpy).toHaveBeenCalledWith(1);
  });

  it('should call console.log when ngOnChanges runs', () => {
    const consoleSpy = vi.spyOn(
      console,
      'log'
    );

    const changes: SimpleChanges = {
      course: new SimpleChange(
        undefined,
        mockCourse,
        true
      )
    };

    component.ngOnChanges(changes);

    expect(consoleSpy).toHaveBeenCalledWith(
      'Current course value:',
      mockCourse
    );

    consoleSpy.mockRestore();
  });

  it('should show Unenroll when the course is enrolled', () => {
    store.setState({
      enrollments: {
        enrolledCourseIds: [1]
      }
    });

    fixture.detectChanges();

    const button =
      fixture.debugElement.query(By.css('button'))
        .nativeElement as HTMLButtonElement;

    expect(button.textContent?.trim()).toBe(
      'Unenroll'
    );
  });
});