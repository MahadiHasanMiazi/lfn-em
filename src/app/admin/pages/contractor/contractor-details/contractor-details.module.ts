import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractorDetailsRoutingModule } from './contractor-details-routing.module';
import { ContractorDetailsComponent } from './contractor-details.component';


@NgModule({
  declarations: [
    ContractorDetailsComponent
  ],
  imports: [
    CommonModule,
    ContractorDetailsRoutingModule
  ]
})
export class ContractorDetailsModule { }
