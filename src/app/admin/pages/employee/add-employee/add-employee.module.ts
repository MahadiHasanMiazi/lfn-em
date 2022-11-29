import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEmployeeRoutingModule } from './add-employee-routing.module';
import { AddEmployeeComponent } from './add-employee.component';
import { IntlInputPhoneModule } from 'intl-input-phone';
import { AppDropzoneModule } from 'src/app/shared/app-dropzone/app-dropzone.module';


@NgModule({
  declarations: [
    AddEmployeeComponent
  ],
  imports: [
    CommonModule,
    AddEmployeeRoutingModule,
    IntlInputPhoneModule,
    AppDropzoneModule
  ],
  exports: [
    AddEmployeeComponent
  ]
})
export class AddEmployeeModule { }
