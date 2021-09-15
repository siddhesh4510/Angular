import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FetchedTableComponent} from './fetched-table/fetched-table.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
const routes: Routes = [
  {
    path:'', 
    component:FetchedTableComponent
  }
  ,
  {
    path:'table',
    component:FetchedTableComponent
  }
  ,
  {
    path:'employee-form',
    component:EmployeeFormComponent

  }
  ,
  {
    path:"**",
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents= [ FetchedTableComponent, EmployeeFormComponent , PageNotFoundComponent]
