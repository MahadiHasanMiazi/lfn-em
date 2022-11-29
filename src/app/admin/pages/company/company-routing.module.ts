import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./company-list/company-list.module').then((m) => m.CompanyListModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./company-details/company-details.module').then((m) => m.CompanyDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
