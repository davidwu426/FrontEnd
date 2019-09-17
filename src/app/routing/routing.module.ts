import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaComponent } from '../components/formula/formula.component';
<<<<<<< HEAD
import { ResourceComponent } from '../components/resource/resource.component';
=======
import { FormulaFieldsComponent } from '../components/formula-fields/formula-fields.component';
>>>>>>> 7e5962974e686abb5fd86de0beca1824476e326b


const appRoutes : Routes = [
  {path : "formula", component : FormulaComponent},
<<<<<<< HEAD
  {path : "resource", component : ResourceComponent}
=======
  {path : "formula/fields", component : FormulaFieldsComponent},
>>>>>>> 7e5962974e686abb5fd86de0beca1824476e326b
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports : [RouterModule],
})
export class RoutingModule { }
