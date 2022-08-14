import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get('http://localhost:3030/api/products');
  }
  getProductById(id: number) {
    return this.http.get('http://localhost:3030/api/products/' + id);
  }
  deleteProduct(id: number): any {
    return this.http.delete('http://localhost:3030/api/products/' + id);
  }

  getEmployees() {
    return this.http.get('http://localhost:3030/api/employees');
  }

  getContacts() {
    return this.http.get('http://localhost:3030/api/contact-us');
  }
}
