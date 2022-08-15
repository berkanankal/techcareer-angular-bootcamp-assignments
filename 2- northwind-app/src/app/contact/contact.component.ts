import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts : any = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getContacts().subscribe(data => {
      this.contacts = data;
    }
    );
  }

}
