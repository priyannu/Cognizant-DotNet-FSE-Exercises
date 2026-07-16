import {
  AsyncPipe,
  NgIf
} from '@angular/common';
import {
  Component
} from '@angular/core';
import {
  RouterOutlet
} from '@angular/router';

import { Header } from './components/header/header';
import { LoadingService } from './services/loading';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly isLoading$;

  constructor(
    private loadingService: LoadingService
  ) {
    this.isLoading$ =
      this.loadingService.isLoading$;
  }
}