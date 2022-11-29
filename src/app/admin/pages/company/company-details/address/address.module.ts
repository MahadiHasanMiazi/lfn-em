import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressRoutingModule } from './address-routing.module';
import { AddressComponent } from './address.component';
import { BtnLoaderModule } from 'src/app/shared/btn-loader/btn-loader.module';
import { GoogleMapModule } from 'src/app/shared/google-map/google-map.module';
import { AddressAutoGoogleModule } from 'src/app/shared/address-auto-google/address-auto-google.module';
import { AddressSearchMapModule } from 'src/app/shared/address-search-map/address-search-map.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddressComponent
  ],
  imports: [
    CommonModule,
    AddressRoutingModule,
    BtnLoaderModule,
    AddressSearchMapModule,
    FormsModule
  ]
})
export class AddressModule { }
