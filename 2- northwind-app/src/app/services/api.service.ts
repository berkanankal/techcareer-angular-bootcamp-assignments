import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getProducts(){
    return this.http.get('http://localhost:3030/api/products');
  }

  getEmployees(){
    return this.http.get('http://localhost:3030/api/employees');
  }

  getContacts(){
    return this.http.get('http://localhost:3030/api/contact-us');
  }
}
