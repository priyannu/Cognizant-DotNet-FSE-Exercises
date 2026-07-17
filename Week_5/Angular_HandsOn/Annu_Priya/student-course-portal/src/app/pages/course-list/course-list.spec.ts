import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

import { beforeEach, describe, expect, it } from 'vitest';

import { CourseList } from './course-list';
import { EnrollmentService } from '../../services/enrollment';

describe('CourseList', () => {
  let component: CourseList;
  let fixture: ComponentFixture<CourseList>;
  let store: MockStore;

  const initialState = {
    courses: {
      courses: [],
      loading: false,
      error: null
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseList],
      providers: [
        provideRouter([]),

        provideMockStore({
          initialState
        }),

        {
          provide: EnrollmentService,
          useValue: {
            getStudentsByCourse: () => of([])
          }
        }
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);

    fixture = TestBed.createComponent(CourseList);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show loading indicator when loading is true', () => {

    store.setState({
      courses: {
        courses: [],
        loading: true,
        error: null
      }
    });

    store.refreshState();
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain(
      'Loading courses...'
    );
  });

  it('should hide loading indicator when loading is false', () => {

    store.setState({
      courses: {
        courses: [],
        loading: false,
        error: null
      }
    });

    store.refreshState();
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).not.toContain(
      'Loading courses...'
    );
  });
});
