import {
  HttpInterceptorFn
} from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';

import { LoadingService } from '../services/loading';

export const loadingInterceptor: HttpInterceptorFn = (
  request,
  next
) => {
  const loadingService = inject(LoadingService);

  loadingService.show();

  console.log(
    'Loading started:',
    request.url
  );

  return next(request).pipe(
    finalize(() => {
      loadingService.hide();

      console.log(
        'Loading finished:',
        request.url
      );
    })
  );
};
