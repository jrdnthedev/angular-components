import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { ReactiveForm } from './reactive-form/reactive-form';

@Component({
  selector: 'app-root',
  imports: [ ReactiveForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-components');
}
