import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  catchError,
  forkJoin,
  map,
  Observable,
  of,
  switchMap,
  throwError
} from 'rxjs';

import { Course } from '../models/course.model';
import { CourseService } from './course';

export interface Student {
  id: number;
  name: string;
  email?: string;
}

export interface Enrollment {
  id?: number;
  studentId: number;
  courseId: number;
}

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private readonly enrollmentsUrl =
    'http://localhost:3000/enrollments';

  private readonly studentsUrl =
    'http://localhost:3000/students';

  private enrolledCourseIds: number[] = [];

  constructor(
    private http: HttpClient,
    private courseService: CourseService
  ) {}

  enroll(courseId: number): Observable<Enrollment> {
    if (!this.enrolledCourseIds.includes(courseId)) {
      this.enrolledCourseIds.push(courseId);
    }

    const enrollment: Enrollment = {
      studentId: 1,
      courseId
    };

    return this.http
      .post<Enrollment>(this.enrollmentsUrl, enrollment)
      .pipe(
        catchError(error => {
          this.enrolledCourseIds =
            this.enrolledCourseIds.filter(id => id !== courseId);

          return throwError(() => error);
        })
      );
  }

  unenroll(courseId: number): Observable<void> {
    return this.http
      .get<Enrollment[]>(
        `${this.enrollmentsUrl}?studentId=1&courseId=${courseId}`
      )
      .pipe(
        switchMap(enrollments => {
          const enrollment = enrollments[0];

          if (!enrollment?.id) {
            this.enrolledCourseIds =
              this.enrolledCourseIds.filter(id => id !== courseId);

            return of(void 0);
          }

          return this.http.delete<void>(
            `${this.enrollmentsUrl}/${enrollment.id}`
          );
        }),
        map(() => {
          this.enrolledCourseIds =
            this.enrolledCourseIds.filter(id => id !== courseId);
        })
      );
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds.includes(courseId);
  }

  getEnrolledCourses(): Observable<Course[]> {
    return this.http
      .get<Enrollment[]>(
        `${this.enrollmentsUrl}?studentId=1`
      )
      .pipe(
        switchMap(enrollments => {
          this.enrolledCourseIds =
            enrollments.map(enrollment => enrollment.courseId);

          if (enrollments.length === 0) {
            return of([]);
          }

          const courseRequests = enrollments.map(enrollment =>
            this.courseService.getCourseById(enrollment.courseId)
          );

          return forkJoin(courseRequests);
        }),
        catchError(error => {
          console.error('Enrollment loading error:', error);

          return throwError(
            () => new Error(
              'Failed to load enrolled courses.'
            )
          );
        })
      );
  }

  getStudentsByCourse(courseId: number): Observable<Student[]> {
    return this.http
      .get<Enrollment[]>(
        `${this.enrollmentsUrl}?courseId=${courseId}`
      )
      .pipe(
        switchMap(enrollments => {
          if (enrollments.length === 0) {
            return of([]);
          }

          const studentRequests = enrollments.map(enrollment =>
            this.http.get<Student>(
              `${this.studentsUrl}/${enrollment.studentId}`
            )
          );

          return forkJoin(studentRequests);
        }),
        catchError(error => {
          console.error('Student loading error:', error);

          return throwError(
            () => new Error(
              'Failed to load enrolled students.'
            )
          );
        })
      );
  }
}
