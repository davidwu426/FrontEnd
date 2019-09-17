import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaComponent } from '../components/formula/formula.component';
import { ResourceComponent } from '../components/resource/resource.component';
import { FormulaFieldsComponent } from '../components/formula-fields/formula-fields.component';


const appRoutes : Routes = [
  {path : "formula", component : FormulaComponent},

  {path : "resource", component : ResourceComponent},

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
