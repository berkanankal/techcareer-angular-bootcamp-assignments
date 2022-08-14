import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any = [];

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  action() {
    this.router.navigate(['products/2']);
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
}
