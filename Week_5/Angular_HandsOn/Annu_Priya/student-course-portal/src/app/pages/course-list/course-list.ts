import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, of } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';

import { CourseCard } from '../../components/course-card/course-card';
import { Course } from '../../models/course.model';
import {
  EnrollmentService,
  Student
} from '../../services/enrollment';

import { loadCourses } from '../../store/course/course.actions';
import {
  selectAllCourses,
  selectCoursesError,
  selectCoursesLoading
} from '../../store/course/course.selectors';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

  courses$: Observable<Course[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  selectedCourseId: number | null = null;
  selectedCourseName = '';

  enrolledStudents: Student[] = [];
  studentMessage = '';

  private selectedCourseSubject = new Subject<Course>();

  constructor(
    private store: Store,
    private enrollmentService: EnrollmentService
  ) {

    this.courses$ = this.store.select(selectAllCourses);
    this.loading$ = this.store.select(selectCoursesLoading);
    this.error$ = this.store.select(selectCoursesError);

    this.store.dispatch(loadCourses());

    this.selectedCourseSubject.pipe(
      tap(course => {
        this.selectedCourseId = course.id;
        this.selectedCourseName = course.name;
        this.enrolledStudents = [];
        this.studentMessage = 'Loading enrolled students...';
      }),

      switchMap(course =>
        this.enrollmentService.getStudentsByCourse(course.id).pipe(
          catchError(() => {
            this.studentMessage =
              'Failed to load enrolled students.';
            return of([]);
          })
        )
      )

    ).subscribe(students => {

      this.enrolledStudents = students;

      this.studentMessage =
        students.length === 0
          ? 'No students enrolled in this course.'
          : '';
    });
  }

  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  onEnroll(courseId: number): void {
    console.log('Enroll', courseId);
  }

  loadStudents(course: Course): void {
    this.selectedCourseSubject.next(course);
  }
}