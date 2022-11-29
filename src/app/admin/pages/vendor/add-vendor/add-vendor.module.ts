import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddVendorRoutingModule } from './add-vendor-routing.module';
import { AddVendorComponent } from './add-vendor.component';
import { RouterModule } from '@angular/router';
import { IntlInputPhoneModule } from 'intl-input-phone';
import { BtnLoaderModule } from 'src/app/shared/btn-loader/btn-loader.module';
import { AddressAutoGoogleModule } from 'src/app/shared/address-auto-google/address-auto-google.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { AppDropzoneModule } from 'src/app/shared/app-dropzone/app-dropzone.module';
import { InputFieldModule } from 'src/app/shared/input-field/input-field.module';


@NgModule({
  declarations: [
    AddVendorComponent
  ],
  imports: [
    CommonModule,
    AddVendorRoutingModule,
    RouterModule,
    IntlInputPhoneModule,
    BtnLoaderModule,
    AddressAutoGoogleModule,
    FormsModule,
    DropzoneModule,
    AppDropzoneModule,
    ReactiveFormsModule,
    InputFieldModule
  ],
  exports: [
    AddVendorComponent
  ]
})
export class AddVendorModule { }
