import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() columns: any[];

  @Output() hideDropdown: EventEmitter<any> = new EventEmitter<any>();
  prefix: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.prefix = this.columns[0].name;
    if(this.prefix.indexOf(" ") > -1) {
      this.prefix = this.prefix.split(" ").join('-');
    }
  }

  onHideDropdown() {
    this.hideDropdown.emit(null);
  }


  showProducts(label) {
    const name = label.toLowerCase().split(" ").join('-');
    let url = '/product/' + name;

    if(this.prefix !== '') {
      url = '/product/' + this.prefix.toLowerCase() + '/' + name;
    }

    this.router.navigateByUrl(url);
    this.onHideDropdown();
  }

}
