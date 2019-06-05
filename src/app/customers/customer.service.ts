import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient, @Inject('API_URL') private url: string) {

  }

  getRequest() {
    const _url = `${this.url}/customers/request`;
    return this.http.get(_url).toPromise();
  }

}
