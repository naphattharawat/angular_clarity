import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  services: any = [];
  requestOpen: boolean = false;

  constructor(private customerService: CustomerService) { }

  async ngOnInit() {
    console.log('get request');
    await this.getRequest();
  }

  async getRequest() {
    try {
      let rs: any = await this.customerService.getRequest();
      console.log(rs);
    } catch (error) {
      console.error('xxx: ', error.status);
    }
  }

  openNewRequest() {
    this.requestOpen = true;
  }
}
