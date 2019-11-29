import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  p_id: number;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.p_id = +this.route.snapshot.paramMap.get('id');
  }

}
