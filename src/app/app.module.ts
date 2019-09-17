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

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormulaComponent } from './components/formula/formula.component';
import { FormulaFieldsComponent } from './components/formula-fields/formula-fields.component';
import { CellsService } from './service/cells.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FormulaComponent,
    FormulaFieldsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
