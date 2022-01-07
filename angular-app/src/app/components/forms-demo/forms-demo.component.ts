import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-demo',
  templateUrl: './forms-demo.component.html',
  styleUrls: ['./forms-demo.component.scss']
})
export class FormsDemoComponent implements OnInit {

  formData: any = {
    firstName: '',
    lastName: '',
    gender: 'male'
  };

  constructor() { }

  ngOnInit(): void {
  }

  saveData(userForm: NgForm){
  console.log('userForm', userForm.value);
  }

}
