import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

let view;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {



  isShow=false;

  toggle(){
    this.isShow = !this.isShow
  }

}
