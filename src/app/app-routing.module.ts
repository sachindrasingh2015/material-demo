import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactComponent } from './mat-form/react/react.component';


const routes: Routes = [
  {
    path:'company',
    loadChildren:'app/company/company.module#CompanyModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
