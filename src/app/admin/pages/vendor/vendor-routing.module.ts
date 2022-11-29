import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./vendor-list/vendor-list.module').then((m) => m.VendorListModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./vendor-details/vendor-details.module').then((m) => m.VendorDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
