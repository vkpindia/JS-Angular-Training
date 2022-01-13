import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.scss']
})
export class ReactiveFormDemoComponent implements OnInit {

  public userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    /* this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]),
      age: new FormControl('', Validators.required),
      gender: new FormControl('male', Validators.required)
    }); */
    this.userForm = this.formBuilder.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
        lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
        age:  ['', [Validators.required]],
        gender: ['male', [Validators.required]],
        address: this.formBuilder.group({
          addressLine1: ['', [Validators.required]],
          addressLine: this.formBuilder.array([]),
          landmark: ['', [Validators.required]],
          state: ['', [Validators.required]],
          city: ['', [Validators.required]],
          postalCode: ['', [Validators.required]]
        })
      }
    )
   }

  ngOnInit(): void {
  }

  addAddressFild(){
    let formGrpup = this.formBuilder.group({
      addressLine2: ['', [Validators.required]]
    });

    let formArray = (<FormArray>(<FormGroup>this.userForm.get('address')).get('addressLine'));
    formArray.push(formGrpup);
    console.log('formArray', formArray.value);
  }

  removeField(index:number){
    let formArray = (<FormArray>(<FormGroup>this.userForm.get('address')).get('addressLine'));
    formArray.removeAt(index);
  }

  get addressArray(){
    return (<FormArray>(<FormGroup>this.userForm.get('address')).get('addressLine'));
  }

  get formControl(){
    return this.userForm.controls;
  }

  get formAddressControl(){
    return (<FormGroup>this.userForm.get('address')).controls;
  }

  saveData(){
    if(this.userForm.invalid){
      this.userForm.markAllAsTouched();
      return;
    } else {
      alert(JSON.stringify(this.userForm.value));
      /* this.userForm.patchValue(this.userForm.value);
      this.userForm.setValue(this.userForm.value); */
      this.userForm.reset();
    }
  }

}
