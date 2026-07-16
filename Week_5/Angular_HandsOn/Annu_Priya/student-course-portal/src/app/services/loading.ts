import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private activeRequests = 0;

  private readonly loadingSubject =
    new BehaviorSubject<boolean>(false);

  readonly isLoading$: Observable<boolean> =
    this.loadingSubject.asObservable();

  show(): void {
    this.activeRequests++;

    queueMicrotask(() => {
      this.loadingSubject.next(true);
    });
  }

  hide(): void {
    if (this.activeRequests > 0) {
      this.activeRequests--;
    }

    if (this.activeRequests === 0) {
      queueMicrotask(() => {
        this.loadingSubject.next(false);
      });
    }
  }
}
