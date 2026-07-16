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

import { Course } from '../../models/course.model';
import { Highlight } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { EnrollmentService } from '../../services/enrollment';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, Highlight, CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges {
  @Input() course!: Course;

  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded = false;
  enrollmentError = '';

  constructor(
    private enrollmentService: EnrollmentService,
    private router: Router
  ) {}

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

  toggleEnrollment(): void {
    this.enrollmentError = '';

    if (this.enrollmentService.isEnrolled(this.course.id)) {
      this.enrollmentService.unenroll(this.course.id).subscribe({
        next: () => {
          this.enrollRequested.emit(this.course.id);
        },
        error: () => {
          this.enrollmentError = 'Failed to unenroll from this course.';
        }
      });
    } else {
      this.enrollmentService.enroll(this.course.id).subscribe({
        next: () => {
          this.enrollRequested.emit(this.course.id);
        },
        error: () => {
          this.enrollmentError = 'Failed to enroll in this course.';
        }
      });
    }
  }

  isEnrolled(): boolean {
    return this.enrollmentService.isEnrolled(this.course.id);
  }

  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }

  goToDetails(): void {
    this.router.navigate(['/courses', this.course.id]);
  }

  get cardClasses(): Record<string, boolean> {
    return {
      'card--enrolled': this.isEnrolled(),
      'card--full': (this.course.credits ?? 0) >= 4,
      expanded: this.isExpanded
    };
  }
}