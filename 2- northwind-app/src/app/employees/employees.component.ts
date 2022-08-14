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
    this.api.getEmployees().subscribe((data) => {
      console.log(data);
      this.employees = data;
    });
  }
}
