import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCompanyComponent } from './add-company.component';
import { BtnLoaderModule } from 'src/app/shared/btn-loader/btn-loader.module';
import { RouterModule } from '@angular/router';
import { IntlInputPhoneModule } from 'intl-input-phone';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddressAutoGoogleModule } from 'src/app/shared/address-auto-google/address-auto-google.module';
import { AppDropzoneModule } from 'src/app/shared/app-dropzone/app-dropzone.module';
import {InputFieldNumberDirective} from "../../../../directives/input-field-number.directive";
import {InputFieldModule} from "../../../../shared/input-field/input-field.module";


@NgModule({
  declarations: [
    AddCompanyComponent,
    InputFieldNumberDirective
  ],
    imports: [
        CommonModule,
        BtnLoaderModule,
        RouterModule,
        IntlInputPhoneModule,
        FormsModule,
        AddressAutoGoogleModule,
        AppDropzoneModule,
        ReactiveFormsModule,
        InputFieldModule
    ],
  exports: [
    AddCompanyComponent
  ]
})
export class AddCompanyModule { }
