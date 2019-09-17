import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaComponent } from '../components/formula/formula.component';
import { FormulaFieldsComponent } from '../components/formula-fields/formula-fields.component';


const appRoutes : Routes = [
  {path : "formula", component : FormulaComponent},
  {path : "formula/fields", component : FormulaFieldsComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports : [RouterModule],
})
export class RoutingModule { }
