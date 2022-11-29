import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./employee-list/employee-list.module').then((m) => m.EmployeeListModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./employee-details/employee-details.module').then((m) => m.EmployeeDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
