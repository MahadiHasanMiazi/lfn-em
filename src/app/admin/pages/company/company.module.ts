import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import {AddCompanyModule} from "./add-company/add-company.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    AddCompanyModule
  ]
})
export class CompanyModule { }
