import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';


const CustomAngularMaterial = [MatButtonModule, MatSidenavModule, MatListModule]


@NgModule({

  imports: [],
  exports : [CustomAngularMaterial],
})
export class AngularMaterialModule { }
