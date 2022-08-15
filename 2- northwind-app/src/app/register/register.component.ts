import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  myForm!: FormGroup;

  constructor(
    private api: ApiService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      firstName: '',
      lastName: '',
      username: '',
      password: '',
    });
  }

  submit() {
    this.api.register(this.myForm.value).subscribe((res) => {
      alert('User registered successfully');
      this.myForm.reset();
      console.log(res);
      this.router.navigate(['/login']);
    });
  }
}
