import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import {
  Course,
  CourseCard
} from '../../components/course-card/course-card';

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

  courses: Course[] = [
    {
      id: 1,
      name: 'Angular Fundamentals',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed',
      enrolled: true
    },
    {
      id: 2,
      name: 'TypeScript Essentials',
      code: 'TS102',
      credits: 1,
      gradeStatus: 'pending',
      enrolled: false
    },
    {
      id: 3,
      name: 'Web Development',
      code: 'WEB103',
      credits: 3,
      gradeStatus: 'failed',
      enrolled: true
    },
    {
      id: 4,
      name: 'Database Systems',
      code: 'DB104',
      credits: null,
      gradeStatus: 'passed',
      enrolled: false
    },
    {
      id: 5,
      name: 'Cloud Computing',
      code: 'CC105',
      credits: 4,
      gradeStatus: 'pending',
      enrolled: false
    }
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  // trackBy improves performance because Angular updates only changed
  // course cards instead of recreating every card in the list.
  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }
}
