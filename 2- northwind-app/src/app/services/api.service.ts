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
  addProduct(product: any): any {
    return this.http.post('http://localhost:3030/api/products', product);
  }

  getEmployees() {
    return this.http.get('http://localhost:3030/api/employees');
  }
  getEmployeeById(id: number) {
    return this.http.get('http://localhost:3030/api/employees/' + id);
  }
  deleteEmployee(id: number): any {
    return this.http.delete('http://localhost:3030/api/employees/' + id);
  }
  addEmployee(employee: any): any {
    return this.http.post('http://localhost:3030/api/employees', employee);
  }

  getContacts() {
    return this.http.get('http://localhost:3030/api/contact-us');
  }
}
