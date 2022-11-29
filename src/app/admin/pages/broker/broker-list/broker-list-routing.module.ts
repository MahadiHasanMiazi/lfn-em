import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrokerListComponent} from "./broker-list.component";

const routes: Routes = [
  {
    path: "",
    component: BrokerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrokerListRoutingModule { }
