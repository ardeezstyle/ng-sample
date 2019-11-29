import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  show: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  showMenu(){
    this.show = true;
  }

  hideMenu(){
    this.show = false;
  }

}
