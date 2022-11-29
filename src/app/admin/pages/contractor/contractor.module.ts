import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractorRoutingModule } from './contractor-routing.module';
import {AddContractorModule} from "./add-contractor/add-contractor.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContractorRoutingModule
  ]
})
export class ContractorModule { }
