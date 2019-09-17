<<<<<<< HEAD
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material';
import { IconsModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======
//Modules
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {RoutingModule} from './routing/routing.module';
import {HttpClientModule} from '@angular/common/http';

//Services
import {ColumnsService} from './service/columns.service';
>>>>>>> 7e5962974e686abb5fd86de0beca1824476e326b

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
<<<<<<< HEAD

import { AngularMaterialModule} from './angular-material/angular-material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RoutingModule } from './routing/routing.module';
import { FormulaComponent } from './components/formula/formula.component';
import { ResourceComponent } from './components/resource/resource.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
=======
import { FormulaComponent } from './components/formula/formula.component';
import { FormulaFieldsComponent } from './components/formula-fields/formula-fields.component';
import { CellsService } from './service/cells.service';

>>>>>>> 7e5962974e686abb5fd86de0beca1824476e326b

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FormulaComponent,
<<<<<<< HEAD
    ResourceComponent
=======
    FormulaFieldsComponent,
>>>>>>> 7e5962974e686abb5fd86de0beca1824476e326b
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatIconModule,
    IconsModule,
    AngularMaterialModule,
    FontAwesomeModule,
    RoutingModule,
    HttpClientModule,
  ],
  providers: [
    ColumnsService,
    CellsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 }

 platformBrowserDynamic().bootstrapModule(AppModule);
