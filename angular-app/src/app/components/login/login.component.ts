import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../services/demo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  message = '';
  customerList: any[] = [];

  constructor(private loginService: DemoService) { }

  ngOnInit(): void {
    this.customerList = this.loginService.getCustomerData();
  }

  login(username:string, passowrd:string){
    this.message = this.loginService.validateUser(username, passowrd);
    this.username = '';
    this.password = '';
  }

}
