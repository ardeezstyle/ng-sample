import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./containers/home/home.component";
import {ProductsComponent} from "./containers/products/products.component";
import {CategoryComponent} from "./containers/products/category/category.component";
import {ProductComponent} from "./containers/products/product/product.component";


const routes: Routes = [
  {path: "products", component: ProductsComponent},
  {path: "category", component: CategoryComponent},
  {path: "product/:id", component: ProductComponent},
  {path: "", component: HomeComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
