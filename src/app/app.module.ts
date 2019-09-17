import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material';
import { IconsModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Modules
import {HttpClientModule} from '@angular/common/http';

//Services
import {ColumnsService} from './service/columns.service';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';


import { AngularMaterialModule} from './angular-material/angular-material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RoutingModule } from './routing/routing.module';
import { ResourceComponent } from './components/resource/resource.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { FormulaComponent } from './components/formula/formula.component';
import { FormulaFieldsComponent } from './components/formula-fields/formula-fields.component';
import { CellsService } from './service/cells.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FormulaComponent,
    ResourceComponent,
    FormulaFieldsComponent,
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