import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { RouterLink } from '@angular/router';

import { CanComponentDeactivate } from '../../../guards/unsaved-changes-guard';

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentForm implements CanComponentDeactivate {
  enrollForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.enrollForm = this.formBuilder.group({
      studentName: ['', Validators.required],
      studentEmail: ['', [Validators.required, Validators.email]],
      courseId: ['', Validators.required]
    });
  }

  submitForm(): void {
    if (this.enrollForm.valid) {
      console.log('Reactive enrollment submitted:', this.enrollForm.value);
      this.enrollForm.markAsPristine();
    }
  }

  hasUnsavedChanges(): boolean {
    return this.enrollForm.dirty;
  }
}