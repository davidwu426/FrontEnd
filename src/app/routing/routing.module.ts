import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaComponent } from '../components/formula/formula.component';
import { ResourceComponent } from '../components/resource/resource.component';


const appRoutes : Routes = [
  {path : "formula", component : FormulaComponent},
  {path : "resource", component : ResourceComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports : [RouterModule],
})
export class RoutingModule { }
