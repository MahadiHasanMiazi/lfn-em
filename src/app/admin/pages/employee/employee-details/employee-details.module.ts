import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDetailsRoutingModule } from './employee-details-routing.module';
import { EmployeeDetailsComponent } from './employee-details.component';
import { InnerSidebarModule } from 'src/app/shared/inner-sidebar/inner-sidebar.module';
import { BtnLoaderModule } from 'src/app/shared/btn-loader/btn-loader.module';


@NgModule({
  declarations: [
    EmployeeDetailsComponent
  ],
  imports: [
    CommonModule,
    EmployeeDetailsRoutingModule,
    InnerSidebarModule,
    BtnLoaderModule
  ]
})
export class EmployeeDetailsModule { }
