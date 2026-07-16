import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  catchError,
  map,
  Observable,
  retry,
  tap,
  throwError
} from 'rxjs';

import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private readonly apiUrl = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl).pipe(
      map(courses => courses.filter(course => (course.credits ?? 0) > 0)),
      tap(courses =>
        console.log('Courses loaded:', courses.length)
      ),
      retry(2),
      catchError(error => {
        console.error('Course loading error:', error);

        return throwError(
          () => new Error('Failed to load courses. Please try again.')
        );
      })
    );
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`).pipe(
      retry(2),
      catchError(error => {
        console.error('Course loading error:', error);

        return throwError(
          () => new Error('Failed to load course details.')
        );
      })
    );
  }

  createCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course);
  }

  updateCourse(
    id: number,
    course: Partial<Course>
  ): Observable<Course> {
    return this.http.put<Course>(
      `${this.apiUrl}/${id}`,
      course
    );
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}