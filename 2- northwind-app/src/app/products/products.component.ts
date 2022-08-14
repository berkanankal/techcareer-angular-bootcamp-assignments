import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IProduct } from '../models/IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any = [];
  myForm!: FormGroup;
  productModelObj!: IProduct;
  showAdd!: boolean;
  showUpdate!: boolean;
  updateId!: number;

  constructor(private api: ApiService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.myForm = this.fb.group({
      name: '',
      price: '',
      stock: '',
    });
  }

  getAllProducts() {
    this.api.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  deleteProduct(id: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.api.deleteProduct(id).subscribe(() => {
        this.getAllProducts();
      });
    }
  }

  addProduct() {
    this.productModelObj = this.myForm.value;
    this.api.addProduct(this.productModelObj).subscribe(() => {
      this.myForm.reset();
      let ref = document.getElementById('cancel');
      ref?.click();
      this.getAllProducts();
    });
  }

  clickAddEmployee() {
    this.myForm.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  onEdit(product: IProduct) {
    this.showAdd = false;
    this.showUpdate = true;
    this.updateId = product.id;
    this.myForm.controls['name'].setValue(product.name);
    this.myForm.controls['price'].setValue(product.price);
    this.myForm.controls['stock'].setValue(product.stock);
  }

  updateProduct() {
    this.productModelObj = this.myForm.value;
    this.api
      .updateProduct(this.updateId, this.productModelObj)
      .subscribe(() => {
        this.myForm.reset();
        let ref = document.getElementById('cancel');
        ref?.click();
        this.getAllProducts();
      });
  }
}
