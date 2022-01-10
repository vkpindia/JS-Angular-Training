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
    gender: 'male',
    age: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  saveData(userForm: NgForm){
    if(userForm.invalid){
      console.log('userForm.invalid', userForm.invalid);
      return;
    } else {
      console.log('userForm', userForm.value);
    }
  }

}


