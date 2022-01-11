import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.scss']
})
export class ReactiveFormDemoComponent implements OnInit {

  public userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]),
      age: new FormControl('', Validators.required),
      gender: new FormControl('male', Validators.required)
    });
   }

  ngOnInit(): void {
  }

  get formControl(){
    return this.userForm.controls;
  }

  saveData(){
    if(this.userForm.invalid){
      this.userForm.markAllAsTouched();
      return;
    }
    console.log('userForm', this.userForm.value);
  }

}
