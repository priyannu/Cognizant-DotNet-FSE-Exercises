import {
  HttpErrorResponse,
  HttpInterceptorFn
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  catchError,
  throwError
} from 'rxjs';

export const errorHandlerInterceptor: HttpInterceptorFn = (
  request,
  next
) => {
  const router = inject(Router);

  return next(request).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error(
        'Global HTTP error:',
        {
          url: request.url,
          status: error.status,
          message: error.message
        }
      );

      if (error.status === 401) {
        console.warn(
          'Unauthorized request — redirecting to Home.'
        );

        router.navigate(['/']);
      }

      if (error.status === 500) {
        window.alert(
          'A server error occurred. Please try again later.'
        );
      }

      return throwError(() => error);
    })
  );
};