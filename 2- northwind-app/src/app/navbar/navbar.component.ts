import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  authenticated = false;

  constructor() {}

  ngOnInit(): void {
    if (!!localStorage.getItem('token')) {
      this.authenticated = true;
    }
    Emitters.authEmitter.subscribe((authenticated) => {
      this.authenticated = authenticated;
      console.log(authenticated);
    });
  }

  logout() {
    localStorage.removeItem('token');
    Emitters.authEmitter.emit(false);
  }
}
