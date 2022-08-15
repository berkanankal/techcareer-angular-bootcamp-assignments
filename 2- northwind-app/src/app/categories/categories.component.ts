import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: any = [];
  myForm!: FormGroup;
  showAdd = false;
  showUpdate = false;
  categoryId!: number;

  constructor(private api: ApiService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: '',
      description: '',
    });
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

  addCategory() {
    this.api.addCategory(this.myForm.value).subscribe(() => {
      this.myForm.reset();
      let ref = document.getElementById('cancel');
      ref?.click();
      this.getAllCategories();
    });
  }

  clickAddCategory() {
    this.myForm.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  onEdit(category: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.categoryId = category.id;
    this.myForm.controls['name'].setValue(category.name);
    this.myForm.controls['description'].setValue(category.description);
  }

  updateCategory() {
    this.api
      .updateCategory(this.categoryId, this.myForm.value)
      .subscribe(() => {
        this.myForm.reset();
        let ref = document.getElementById('cancel');
        ref?.click();
        this.getAllCategories();
      });
  }
}
