import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';

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

  constructor(private enrollmentService: EnrollmentService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log('Previous course value:', changes['course'].previousValue);
      console.log('Current course value:', changes['course'].currentValue);
    }
  }

  toggleEnrollment(): void {

    console.log('toggleEnrollment clicked:', this.course.id);

    if (this.enrollmentService.isEnrolled(this.course.id)) {
      this.enrollmentService.unenroll(this.course.id);
    } else {
      this.enrollmentService.enroll(this.course.id);
    }

    console.log(
      'Enrollment state:',
      this.enrollmentService.isEnrolled(this.course.id)
    );

    this.enrollRequested.emit(this.course.id);
  }

  isEnrolled(): boolean {
    return this.enrollmentService.isEnrolled(this.course.id);
  }

  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }

  get cardClasses(): Record<string, boolean> {
    return {
      'card--enrolled': this.isEnrolled(),
      'card--full': (this.course.credits ?? 0) >= 4,
      expanded: this.isExpanded
    };
  }
}