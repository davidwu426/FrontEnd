import { Component, OnInit } from '@angular/core';
import { faUserCircle, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(library : FaIconLibrary) {
    library.addIcons(faUserCircle, faQuestionCircle);
   }

  ngOnInit() {
  }

}
