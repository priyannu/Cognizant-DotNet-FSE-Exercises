import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course-summary-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-summary-widget.html',
  styleUrl: './course-summary-widget.css'
})
export class CourseSummaryWidget implements OnInit {
  courseCount = 0;
  message = '';

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.refreshCount();
  }

  refreshCount(): void {
    this.courseService.getCourses().subscribe({
      next: courses => {
        this.courseCount = courses.length;
      },
      error: error => {
        this.message = error.message;
      }
    });
  }

  addSampleCourse(): void {
    const newCourse: Omit<Course, 'id'> = {
      name: 'Software Engineering',
      code: 'SE106',
      credits: 3,
      gradeStatus: 'pending',
      enrolled: false
    };

    this.courseService.createCourse(newCourse).subscribe({
      next: course => {
        this.message = `Added: ${course.name}`;
        this.refreshCount();
      },
      error: () => {
        this.message = 'Failed to add course.';
      }
    });
  }

  updateFirstCourse(): void {
    const updatedCourse: Course = {
      id: 1,
      name: 'Advanced Angular Fundamentals',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed',
      enrolled: false
    };

    this.courseService.updateCourse(1, updatedCourse).subscribe({
      next: course => {
        this.message = `Updated: ${course.name}`;
        this.refreshCount();
      },
      error: () => {
        this.message = 'Failed to update course.';
      }
    });
  }

  deleteLastCourse(): void {
    this.courseService.getCourses().subscribe({
      next: courses => {
        if (courses.length === 0) {
          this.message = 'No course available to delete.';
          return;
        }

        const lastCourse = courses[courses.length - 1];

        this.courseService.deleteCourse(lastCourse.id).subscribe({
          next: () => {
            this.message = `Deleted course ID: ${lastCourse.id}`;
            this.refreshCount();
          },
          error: () => {
            this.message = 'Failed to delete course.';
          }
        });
      },
      error: () => {
        this.message = 'Failed to load courses.';
      }
    });
  }
}