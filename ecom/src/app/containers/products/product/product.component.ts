import {Component, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  category: string;
  subCategory: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.category = param.category;
      this.subCategory = param.subCategory;


      console.log(this.category);
      console.log(this.subCategory);
    });
  }
}
