import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = [
    {id: 1, name: "A"},
    {id: 2, name: "B"},
    {id: 3, name: "V"},
    {id: 4, name: "C"},
    {id: 5, name: "VA"},
    {id: 6, name: "CA"}
  ];


  constructor() { }

  // getProducts() {
  //   return this.products;
  // }

  getProducts(): Observable<any> {
    return of(this.products).pipe(delay(1000));
  }

  setProduct(product) {
    this.products.push(product);
  }

  deleteProduct(id) {
    const idx = this.products.findIndex(p => p.id === id);
    this.products.splice(idx, 1);
    return this.products;
  }
}
