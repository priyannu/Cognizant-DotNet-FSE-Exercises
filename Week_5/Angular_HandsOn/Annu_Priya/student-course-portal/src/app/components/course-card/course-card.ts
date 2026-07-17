import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Course } from '../../models/course.model';
import { Highlight } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

import {
  enrollInCourse,
  unenrollFromCourse
} from '../../store/enrollment/enrollment.actions';

import {
  selectEnrolledIds
} from '../../store/enrollment/enrollment.selectors';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    CommonModule,
    Highlight,
    CreditLabelPipe
  ],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges {
  @Input() course!: Course;

  @Output() enrollRequested = new EventEmitter<number>();

  readonly enrolledIds$: Observable<number[]>;

  isExpanded = false;

  constructor(
    private readonly store: Store,
    private readonly router: Router
  ) {
    this.enrolledIds$ = this.store.select(selectEnrolledIds);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log(
        'Previous course value:',
        changes['course'].previousValue
      );

      console.log(
        'Current course value:',
        changes['course'].currentValue
      );
    }
  }

  toggleEnrollment(enrolledIds: number[] | null): void {
    const courseId = Number(this.course.id);

    const isCurrentlyEnrolled =
      enrolledIds?.includes(courseId) ?? false;

    if (isCurrentlyEnrolled) {
      this.store.dispatch(
        unenrollFromCourse({ courseId })
      );
    } else {
      this.store.dispatch(
        enrollInCourse({ courseId })
      );
    }

    this.enrollRequested.emit(courseId);
  }

  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }

  goToDetails(): void {
    this.router.navigate([
      '/courses',
      this.course.id
    ]);
  }

  get cardClasses(): Record<string, boolean> {
    return {
      'card--full': (this.course.credits ?? 0) >= 4,
      expanded: this.isExpanded
    };
  }
}