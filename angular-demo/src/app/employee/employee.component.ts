import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  data: any = {
    0: 'Smith',
    1: 'Bangalore'
  };


 data1 =  [
    {
      key:0,
      value: "Smith"
    },
    {
      key:1,
      value: "Bangalore"
    }
  ]
  public employeeName = 'Ashok Kumar';

  constructor() { }

  ngOnInit(): void {
  }

}
