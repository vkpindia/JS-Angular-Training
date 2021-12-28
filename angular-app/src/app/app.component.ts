import { Component } from '@angular/core';
import { DemoService } from './services/demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})

export class AppComponent {

  title = 'Angular Training';

  sid = 1024;
  sname = 'Smith';
  course = 'Angular 13';
  duration = 30;

  uname = 'scott';
  inputType = 'text';
  componentType = 1;

  courseList: string[] = ['HTML5', 'JQuery', 'Angular JS', 'Angular13', 'SCSS'];

  // constructor(private ms: DemoService){}

  displayCourseList(): void {

  }
}
