import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContractorListComponent} from "./contractor-list.component";

const routes: Routes = [
  {
    path: '',
    component: ContractorListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractorListRoutingModule { }
