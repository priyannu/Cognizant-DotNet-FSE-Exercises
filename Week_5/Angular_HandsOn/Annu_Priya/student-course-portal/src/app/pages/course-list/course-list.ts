import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  catchError,
  map,
  Observable,
  of,
  startWith,
  Subject,
  switchMap,
  tap
} from 'rxjs';

import { CourseCard } from '../../components/course-card/course-card';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course';
import {
  EnrollmentService,
  Student
} from '../../services/enrollment';

interface CourseListState {
  courses: Course[];
  isLoading: boolean;
  errorMessage: string;
}

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {
  selectedCourseId: number | null = null;
  selectedCourseName = '';

  enrolledStudents: Student[] = [];
  studentMessage = '';

  courseState$: Observable<CourseListState>;

  private selectedCourseSubject = new Subject<Course>();

  constructor(
    private courseService: CourseService,
    private enrollmentService: EnrollmentService
  ) {
    this.courseState$ = this.courseService.getCourses().pipe(
      map(courses => ({
        courses,
        isLoading: false,
        errorMessage: ''
      })),
      startWith({
        courses: [],
        isLoading: true,
        errorMessage: ''
      }),
      catchError(error =>
        of({
          courses: [],
          isLoading: false,
          errorMessage:
            error.message || 'Failed to load courses.'
        })
      )
    );

    /*
     * switchMap cancels the previous student request when another
     * course is selected before the earlier request completes.
     */
    this.selectedCourseSubject
      .pipe(
        tap(course => {
          this.selectedCourseId = course.id;
          this.selectedCourseName = course.name;
          this.enrolledStudents = [];
          this.studentMessage = 'Loading enrolled students...';

          console.log(
            'Course selected for switchMap:',
            course.id
          );
        }),

        switchMap(course =>
          this.enrollmentService
            .getStudentsByCourse(course.id)
            .pipe(
              catchError(error => {
                console.error(
                  'Student loading error:',
                  error
                );

                this.studentMessage =
                  'Failed to load enrolled students.';

                return of([]);
              })
            )
        )
      )
      .subscribe(students => {
        this.enrolledStudents = students;

        this.studentMessage =
          students.length > 0
            ? ''
            : 'No students enrolled in this course.';

        console.log(
          'Students loaded using switchMap:',
          students
        );
      });
  }

  trackByCourseId(
    index: number,
    course: Course
  ): number {
    return course.id;
  }

  onEnroll(courseId: number): void {
    this.selectedCourseId = courseId;

    console.log(
      'Enrollment action for course:',
      courseId
    );
  }

  loadStudents(course: Course): void {
    this.selectedCourseSubject.next(course);
  }
}