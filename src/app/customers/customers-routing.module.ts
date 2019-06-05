import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { CustomersComponent } from './customers.component';
import { AuthGuard } from '../auth-guard.service';

const routes: Routes = [
  {
    path: 'customers',
    component: LayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'customers', pathMatch: 'full' },
      { path: 'customers', component: CustomersComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
