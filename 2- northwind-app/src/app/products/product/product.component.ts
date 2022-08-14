import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product: any = {};

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    const productId = +(this.route.snapshot.paramMap.get('id') || '0');
    this.api.getProductById(productId).subscribe((data) => {
      this.product = data;
      console.log(this.product);
    });
  }
}
