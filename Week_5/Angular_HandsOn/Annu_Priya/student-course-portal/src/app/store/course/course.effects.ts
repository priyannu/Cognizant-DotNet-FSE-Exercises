import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { CourseService } from '../../services/course';

import {
  loadCourses,
  loadCoursesFailure,
  loadCoursesSuccess
} from './course.actions';

@Injectable()
export class CourseEffects {
  private readonly actions$ = inject(Actions);
  private readonly courseService = inject(CourseService);

  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCourses),

      mergeMap(() =>
        this.courseService.getCourses().pipe(
          map(courses =>
            loadCoursesSuccess({ courses })
          ),

          catchError(error =>
            of(
              loadCoursesFailure({
                error:
                  error instanceof Error
                    ? error.message
                    : 'Failed to load courses.'
              })
            )
          )
        )
      )
    )
  );
}