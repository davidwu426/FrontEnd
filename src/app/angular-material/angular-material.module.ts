import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';


const CustomAngularMaterial = [MatButtonModule, MatSidenavModule, MatListModule, MatToolbarModule,
MatTableModule, MatCheckboxModule];


@NgModule({

  imports: [],
  exports : [CustomAngularMaterial],
})
export class AngularMaterialModule { }
