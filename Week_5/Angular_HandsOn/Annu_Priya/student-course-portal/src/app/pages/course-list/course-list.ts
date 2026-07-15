import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';

import { CourseCard } from '../../components/course-card/course-card';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {
  isLoading = true;
  selectedCourseId: number | null = null;
  courses: Course[] = [];

  constructor(
    private courseService: CourseService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.courses = this.courseService.getCourses();
      this.isLoading = false;

      console.log('Courses loaded from service:', this.courses);

      // Refreshes the template after the asynchronous update.
      this.changeDetector.detectChanges();
    }, 1500);
  }

  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }
}