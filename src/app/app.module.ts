import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomersModule } from './customers/customers.module';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth-guard.service';
import { environment } from './../environments/environment';

export function tokenGetter() {
  return sessionStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    AuthModule,
    LoginModule,
    CustomersModule,
  ],
  providers: [
    { provide: 'API_URL', useValue: environment.apiUrl },
    AuthGuard,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
