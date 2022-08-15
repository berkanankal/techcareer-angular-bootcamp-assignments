import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IEmployee } from 'src/app/models/IEmployee';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  employees: any = [];
  myForm!: FormGroup;
  employeeModelObj!: IEmployee;
  showAdd = false;
  showUpdate = false;
  employeeId!: number;

  constructor(private api: ApiService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getEmployees();
    this.myForm = this.fb.group({
      firstName: '',
      lastName: '',
      title: '',
      country: '',
      city: '',
    });
  }

  getEmployees() {
    this.api.getEmployees().subscribe((data) => {
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

  addEmployee() {
    this.employeeModelObj = this.myForm.value;
    this.api.addEmployee(this.employeeModelObj).subscribe(() => {
      this.myForm.reset();
      let ref = document.getElementById('cancel');
      ref?.click();
      this.getEmployees();
    });
  }

  clickAddEmployee() {
    this.myForm.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  onEdit(employee: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.employeeId = employee.id;
    this.myForm.controls['firstName'].setValue(employee.firstName);
    this.myForm.controls['lastName'].setValue(employee.lastName);
    this.myForm.controls['title'].setValue(employee.title);
    this.myForm.controls['country'].setValue(employee.country);
    this.myForm.controls['city'].setValue(employee.city);
  }

  updateEmployee() {
    this.api
      .updateEmployee(this.employeeId, this.myForm.value)
      .subscribe(() => {
        this.myForm.reset();
        let ref = document.getElementById('cancel');
        ref?.click();
        this.getEmployees();
      });
  }
}
