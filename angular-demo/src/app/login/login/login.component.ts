import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 username: string;
 password: string

 welcomeMessage: string;

 showMessage: boolean = false;

  constructor() {
    this.username = '';
    this.password = '';
    this.welcomeMessage = '';
   }

  ngOnInit(): void {
  }


  login(){
    if (this.username=='admin' && this.password == 'admin@123') {
       alert('Welcome to '+ this.username);
       this.welcomeMessage = `Welcome to ${this.username}`;
       this.username = '';
       this.password = '';
       this.showMessage = true;
    } else {
      alert('Please enter correct username or password');
    }
  }

}
