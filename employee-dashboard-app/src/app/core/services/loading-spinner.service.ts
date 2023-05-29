import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingSpinnerService {
  isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}

  startLoading(): void {
    this.isLoading.next(true);
  }

  stopLoading(): void {
    this.isLoading.next(false);
  }

  isLoadingState(): BehaviorSubject<boolean> {
    return this.isLoading;
  }
}
