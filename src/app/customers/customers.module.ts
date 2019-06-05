import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { CustomersComponent } from './customers.component';
import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { CustomerService } from './customer.service';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule,
    CustomersRoutingModule
  ],
  declarations: [LayoutComponent, CustomersComponent],
  providers: [CustomerService]
})
export class CustomersModule { }
