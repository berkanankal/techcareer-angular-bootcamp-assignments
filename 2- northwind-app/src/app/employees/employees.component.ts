import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  employees: any = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.api.getEmployees().subscribe((data) => {
      console.log(data);
      this.employees = data;
    });
  }

  deleteEmployee(id: number) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.api.deleteEmployee(id).subscribe(() => {
        this.getEmployees();
      });
    }
  }

  // addProduct() {
  //   this.productModelObj = this.myForm.value;
  //   this.api.addProduct(this.productModelObj).subscribe(() => {
  //     this.myForm.reset();
  //     let ref = document.getElementById('cancel');
  //     ref?.click();
  //     this.getAllProducts();
  //   });
  // }
}
