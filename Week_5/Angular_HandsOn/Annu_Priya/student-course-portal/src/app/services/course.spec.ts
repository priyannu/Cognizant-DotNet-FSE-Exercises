import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting
} from '@angular/common/http/testing';

import {
  beforeEach,
  afterEach,
  describe,
  expect,
  it
} from 'vitest';

import { CourseService } from './course';
import { Course } from '../models/course.model';

describe('CourseService', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;

  const mockCourses: Course[] = [
    {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed'
    },
    {
      id: 2,
      name: 'React',
      code: 'RCT101',
      credits: 3,
      gradeStatus: 'pending'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CourseService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch courses', () => {
    service.getCourses().subscribe(courses => {
      expect(courses.length).toBe(2);
      expect(courses).toEqual(mockCourses);
    });

    const req = httpMock.expectOne(
      'http://localhost:3000/courses'
    );

    expect(req.request.method).toBe('GET');

    req.flush(mockCourses);
  });

  it('should handle server error', () => {
    service.getCourses().subscribe({
      next: () => {
        throw new Error('Expected an error');
      },
      error: err => {
        expect(err.message).toBe(
          'Failed to load courses. Please try again.'
        );
      }
    });

    // First request
    let req = httpMock.expectOne(
      'http://localhost:3000/courses'
    );

    req.flush('Server Error', {
      status: 500,
      statusText: 'Server Error'
    });

    // Retry 1
    req = httpMock.expectOne(
      'http://localhost:3000/courses'
    );

    req.flush('Server Error', {
      status: 500,
      statusText: 'Server Error'
    });

    // Retry 2
    req = httpMock.expectOne(
      'http://localhost:3000/courses'
    );

    req.flush('Server Error', {
      status: 500,
      statusText: 'Server Error'
    });
  });
});
