import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { CourseSummaryWidget } from '../../components/course-summary-widget/course-summary-widget';
import { Notification } from '../../components/notification/notification';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CourseSummaryWidget,
    Notification
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {
  portalName = 'Student Course Portal';
  isPortalActive = true;

  message = '';
  searchTerm = '';
  availableCourses = 0;
  errorMessage = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.searchTerm =
      this.route.snapshot.queryParamMap.get('search') || '';

    this.courseService.getCourses().subscribe({
      next: courses => {
        this.availableCourses = courses.length;
      },
      error: error => {
        this.errorMessage = error.message;
      }
    });

    console.log('Home Component Loaded');
  }

  ngOnDestroy(): void {
    console.log('Home Component Destroyed');
  }

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
    this.router.navigate(['/enroll']);
  }

  onSearch(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        search: this.searchTerm
      },
      queryParamsHandling: 'merge'
    });
  }
}