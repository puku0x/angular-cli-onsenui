import { Component, ViewEncapsulation } from '@angular/core';
import { Page1Component } from './page1/page1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  rootPage = Page1Component;
}
