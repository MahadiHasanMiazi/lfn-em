import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LfnStaffComponent } from './lfn-staff.component';

const routes: Routes = [
  {
    path: '',
    component: LfnStaffComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LfnStaffRoutingModule { }
