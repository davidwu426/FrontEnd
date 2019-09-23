import { Component, OnInit } from '@angular/core';
import {MatSidenavModule, MatSidenav} from '@angular/material/sidenav';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor() { }
  buttonTxt = ">";
  ngOnInit() {
  }

  openNav(sidenav: MatSidenav){
    sidenav.toggle();
    if (this.buttonTxt === ">")
      this.buttonTxt = "<";
    else
      this.buttonTxt = ">";
  }

}
