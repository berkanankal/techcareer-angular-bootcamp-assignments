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
    });
  }

  deleteCategory(id: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.api.deleteCategory(id).subscribe(() => {
        this.getAllCategories();
      });
    }
  }
}
