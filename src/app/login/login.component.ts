import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  userTypeId: any;
  userTypes: any = [{ type: 'ผู้ใช้งานทั่วไป', id: 1 }, { type: 'ผู้ดูแลระบบ', id: 2 }];
  errorMessage: string = null;
  isError = false;

  constructor(private route: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  doLogin() {
    this.route.navigate(['/customers']);
    // if (this.username && this.password) {
    //   if (this.userTypeId == 1) {
    //     this.loginService.doCustomerLogin(this.username, this.password)
    //       .subscribe((data: any) => {
    //         if (data.ok) {
    //           sessionStorage.setItem('token', data.token);

    //           this.route.navigate(['/customers']);

    //         } else {
    //           this.isError = true;
    //           this.errorMessage = data.error;
    //         }
    //       }, error => {
    //         this.isError = true;
    //         this.errorMessage = 'เกิดปัญหาในการเชื่อมต่อ';
    //       });
    //   } else {
    //     console.log('Admin login')
    //   }
    // } else {
    //   this.isError = true;
    //   this.errorMessage = 'กรุณาระบุชื่อผู้ใช้งาน หรือ รหัสผ่าน'
    // }

  }

}
