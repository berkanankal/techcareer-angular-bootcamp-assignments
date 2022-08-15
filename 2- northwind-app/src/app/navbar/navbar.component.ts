import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  authenticated = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (!!localStorage.getItem('token')) {
      this.authenticated = true;
    }
    Emitters.authEmitter.subscribe((authenticated) => {
      this.authenticated = authenticated;
    });
  }

  logout() {
    localStorage.removeItem('token');
    Emitters.authEmitter.emit(false);
    this.router.navigate(['/home']);
  }
}
