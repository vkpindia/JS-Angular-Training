import { Component, OnInit } from '@angular/core';
import { ProductT } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productDetails: ProductT = {
    name: 'LG Printer',
    brand: 'LG',
    price: 5600,
    qty: 12
  };

  imgSOurce: string = '/assets/images/LG-printer.webp';
  showProduct: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(){
    console.log('showProduct', this.showProduct);
  }

}
