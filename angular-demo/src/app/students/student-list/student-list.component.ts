import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  firstIndex: number = 0;
  lastIndex: number = 2;
  order = (a: KeyValue<number, string>, b:KeyValue<number, string>): number =>{
    return 0;
  };
  ascOrder = (a: KeyValue<number, string>, b:KeyValue<number, string>): number =>{
    return 0;
  };
  descOrder = (a: KeyValue<number, string>, b:KeyValue<number, string>): number =>{
    return 0;
  };
  public studentList: any[];
  slicedStudentData: any[];



  constructor() {
   this.studentList = this.getStudentList();
   this.slicedStudentData = this.studentList.slice( this.firstIndex, this.lastIndex)
  }

  ngOnInit(): void {
  }


  getStudentList(): any[]{
    return [
      { Name: 'Alfreds Futterkiste', City: 'Berlin', Country: 'Germany', gender: 'M' },
      {
        Name: 'Ana Trujillo Emparedados y helados',
        City: 'México D.F.',
        Country: 'Mexico',
        gender: 'F',
        salary: 20000
      },
      {
        Name: 'Antonio Moreno Taquería',
        City: 'México D.F.',
        Country: 'Mexico',
        gender: 'F',
        salary: 22000
      },
      { Name: 'Around the Horn', City: 'London', Country: 'UK', gender: 'M', salary: 22700 },
      { Name: "B's Beverages", City: 'London', Country: 'UK', gender: 'M', salary: 22800},
      { Name: 'Berglunds snabbköp', City: 'Luleå', Country: 'Sweden', gender: 'M', salary: 22008 },
      { Name: 'Blauer See Delikatessen', City: 'Mannheim', Country: 'Germany', gender: 'F', salary: 22009 },
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
  }

  previous(){
    if(this.firstIndex==0){
      this.lastIndex= this.studentList.length-1;
      this.firstIndex = this.lastIndex-2;
    } else {
      this.firstIndex = this.firstIndex-2;
      this.lastIndex = this.lastIndex-2;
    }
    this.slicedStudentData = this.studentList.slice(this.firstIndex, this.lastIndex);
  }

  next(){
    this.firstIndex = this.firstIndex+2;
    this.lastIndex = this.lastIndex+2;
    if(this.studentList.length<this.firstIndex){
      this.firstIndex = 0;
      this.lastIndex = 2;
    }
    this.slicedStudentData = this.studentList.slice(this.firstIndex, this.lastIndex);
  }

}
