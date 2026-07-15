import { Routes } from '@angular/router';

import { authGuard } from './guards/auth-guard';
import { Home } from './pages/home/home';
import { StudentProfile } from './pages/student-profile/student-profile';
import { CourseDetail } from './pages/course-detail/course-detail';
import { CoursesLayout } from './pages/courses-layout/courses-layout';
import { CourseList } from './pages/course-list/course-list';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'profile',
    canActivate: [authGuard],
    component: StudentProfile
  },
  {
    path: 'courses',
    component: CoursesLayout,
    children: [
      {
        path: '',
        component: CourseList
      },
      {
        path: ':id',
        component: CourseDetail
      }
    ]
  },
  {
    path: 'enroll',
    loadChildren: () =>
      import('./features/enrollment/enrollment-module')
        .then(module => module.EnrollmentModule)
  },
  {
    path: '**',
    component: NotFound
  }
];