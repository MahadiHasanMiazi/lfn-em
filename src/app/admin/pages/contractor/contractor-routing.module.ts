import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./contractor-list/contractor-list.module').then(m => m.ContractorListModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./contractor-details/contractor-details.module').then(m => m.ContractorDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractorRoutingModule { }
