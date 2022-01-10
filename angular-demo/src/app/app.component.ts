import { ViewEncapsulation } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { studentData } from './enum/stidudent-record.enum';
import { EmployeeT } from './models/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'Data Bindings In Angular';
  public sid: number = 0;
  public sname: string = '';
  public course: string = '';
  public duration: string = '';

  public employee: EmployeeT;
  courseList: string[];
  customers: Array<any>;

  constructor(){
    this.customers = [
      { Name: 'Alfreds Futterkiste', City: 'Berlin', Country: 'Germany', gender: 'M' },
      {
        Name: 'Ana Trujillo Emparedados y helados',
        City: 'México D.F.',
        Country: 'Mexico',
        gender: 'F'
      },
      {
        Name: 'Antonio Moreno Taquería',
        City: 'México D.F.',
        Country: 'Mexico',
        gender: 'F'
      },
      { Name: 'Around the Horn', City: 'London', Country: 'UK', gender: 'M' },
      { Name: "B's Beverages", City: 'London', Country: 'UK', gender: 'M'},
      { Name: 'Berglunds snabbköp', City: 'Luleå', Country: 'Sweden', gender: 'M' },
      { Name: 'Blauer See Delikatessen', City: 'Mannheim', Country: 'Germany', gender: 'F' },
      { Name: 'Blondel père et fils', City: 'Strasbourg', Country: 'France', gender: 'M' },
      { Name: 'Bólido Comidas preparadas', City: 'Madrid', Country: 'Spain', gender: 'F' },
      { Name: "Bon app'", City: 'Marseille', Country: 'France', gender: 'M' },
      { Name: 'Bottom-Dollar Marketse', City: 'Tsawassen', Country: 'Canada', gender: 'M' },
      {
        Name: 'Cactus Comidas para llevar',
        City: 'Buenos Aires',
        Country: 'Argentina',
        gender: 'F'
      },
      {
        Name: 'Centro comercial Moctezuma',
        City: 'México D.F.',
        Country: 'Mexico',
        gender: 'M'
      },
      { Name: 'Chop-suey Chinese', City: 'Bern', Country: 'Switzerland' },
      { Name: 'Comércio Mineiro', City: 'São Paulo', Country: 'Brazil' },
    ];
    this.employee = {
      name: 'Scott',
      empID: 1027,
      ejob: 'Manager',
      eSal: 30000,
      eDept: 'Sales'
    }
    this.courseList = ['HTML5', 'JQuery', 'Angular JS', 'Angular13', 'SCSS'];
  }

  ngOnInit(): void {
    this.sid = studentData.sid;
    this.sname = studentData.sname;
    this.course = studentData.course;
    this.duration = studentData.duration;
  }
}
