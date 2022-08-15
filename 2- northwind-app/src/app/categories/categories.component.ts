import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: any = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.api.getCategories().subscribe((data) => {
      this.categories = data;
      console.log(data);
    });
  }
}
