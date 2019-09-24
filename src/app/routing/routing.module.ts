import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormulaComponent } from '../components/formula/formula.component';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
import { ResourceComponent } from '../components/resource/resource.component';
import { FormulaFieldsComponent } from '../components/formula-fields/formula-fields.component';
import { ProjectSelectComponent } from '../components/project/project-select/project-select.component';
import { NavbarComponent } from '../components/navbar/navbar.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'home', component: NavbarComponent},
  {path: 'register', component: SignupComponent},
  {path : 'formula', component : FormulaComponent},

  {path : 'resources', component : ResourceComponent},

  {path : 'formula/fields', component : FormulaFieldsComponent},
  {path : 'project', component : ProjectSelectComponent},
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports : [RouterModule],
})
export class RoutingModule { }
