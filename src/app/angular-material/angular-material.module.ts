import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';


const CustomAngularMaterial = [MatButtonModule, MatSidenavModule, MatListModule, MatToolbarModule]


@NgModule({

  imports: [],
  exports : [CustomAngularMaterial],
})
export class AngularMaterialModule { }
