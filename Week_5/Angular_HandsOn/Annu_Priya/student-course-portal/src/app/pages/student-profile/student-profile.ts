import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Course } from '../../models/course.model';
import { EnrollmentService } from '../../services/enrollment';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.css'
})
export class StudentProfile implements OnInit {
  enrolledCourses: Course[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private enrollmentService: EnrollmentService) {}

  ngOnInit(): void {
    this.enrollmentService.getEnrolledCourses().subscribe({
      next: courses => {
        this.enrolledCourses = courses;
      },
      error: error => {
        this.errorMessage = error.message;
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
}