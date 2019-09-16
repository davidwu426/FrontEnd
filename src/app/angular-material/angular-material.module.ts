import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';


const CustomAngularMaterial = [MatButtonModule, MatSidenavModule, MatListModule, MatToolbarModule,
MatTableModule];


@NgModule({

  imports: [],
  exports : [CustomAngularMaterial],
})
export class AngularMaterialModule { }
