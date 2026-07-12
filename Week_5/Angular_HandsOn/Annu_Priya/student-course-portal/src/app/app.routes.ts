import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { StudentProfile } from './pages/student-profile/student-profile';
import { EnrollmentForm } from './pages/enrollment-form/enrollment-form';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'profile',
    component: StudentProfile
  },
  {
    path: 'enroll',
    component: EnrollmentForm
  }
];
