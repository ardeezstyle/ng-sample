import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {generate} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  prods = [];

  constructor(private prodService: ProductsService) { }

  ngOnInit() {
    this.prodService.getProducts().subscribe(prods => this.prods = prods);
  }

  save() {
    this.prodService.setProduct({id: this.generateId(), name: "Tom"});

    this.prodService.getProducts().subscribe(prods => this.prods = prods);

    console.log(this.prods);
  }

  private generateId() {
    return Math.floor(Math.random() * 100);
  }

  delete(id) {
    this.prods = this.prodService.deleteProduct(id);
  }

}
