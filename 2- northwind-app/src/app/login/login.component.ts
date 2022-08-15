import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup;

  constructor(
    private api: ApiService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get username() {
    return this.myForm.get('username');
  }
  get password() {
    return this.myForm.get('password');
  }

  submit() {
    this.api.login(this.myForm.value).subscribe((res) => {
      alert('User logged in successfully');
      this.myForm.reset();
      Emitters.authEmitter.emit(true);
      localStorage.setItem('token', JSON.stringify(res));
      this.router.navigate(['/']);
    });
  }
}
