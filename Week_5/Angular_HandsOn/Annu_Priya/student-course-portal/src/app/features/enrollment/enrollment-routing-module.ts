import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authGuard } from '../../guards/auth-guard';
import { unsavedChangesGuard } from '../../guards/unsaved-changes-guard';
import { EnrollmentForm } from './enrollment-form/enrollment-form';
import { ReactiveEnrollmentForm } from './reactive-enrollment-form/reactive-enrollment-form';

const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    component: EnrollmentForm
  },
  {
    path: 'reactive',
    canActivate: [authGuard],
    canDeactivate: [unsavedChangesGuard],
    component: ReactiveEnrollmentForm
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrollmentRoutingModule {}