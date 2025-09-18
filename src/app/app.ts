import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Display } from './display/display';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Display],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-demo-project';
}
