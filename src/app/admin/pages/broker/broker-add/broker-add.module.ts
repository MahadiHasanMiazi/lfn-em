import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BrokerAddComponent } from "./broker-add.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BtnLoaderModule } from "../../../../shared/btn-loader/btn-loader.module";
import { InputFieldModule } from "../../../../shared/input-field/input-field.module";
import { AddressAutoGoogleModule } from "../../../../shared/address-auto-google/address-auto-google.module";
import { IntlInputPhoneModule } from "intl-input-phone";
import { AppDropzoneModule } from "../../../../shared/app-dropzone/app-dropzone.module";

@NgModule({
  declarations: [BrokerAddComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BtnLoaderModule,
    InputFieldModule,
    AddressAutoGoogleModule,
    IntlInputPhoneModule,
    AppDropzoneModule,
  ],
  exports: [BrokerAddComponent],
})
export class BrokerAddModule {}
