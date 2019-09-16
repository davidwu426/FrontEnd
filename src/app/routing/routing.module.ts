import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaComponent } from '../components/formula/formula.component';


const appRoutes : Routes = [
  {path : "formula", component : FormulaComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports : [RouterModule],
})
export class RoutingModule { }
