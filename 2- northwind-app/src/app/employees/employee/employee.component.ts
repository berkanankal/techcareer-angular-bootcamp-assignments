import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employee: any = {};

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    const employeeId = +(this.route.snapshot.paramMap.get('id') || '0');
    this.api.getEmployeeById(employeeId).subscribe((data) => {
      this.employee = data;
    });
  }
}
