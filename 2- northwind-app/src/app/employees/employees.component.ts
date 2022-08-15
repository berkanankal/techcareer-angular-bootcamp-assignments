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
}
