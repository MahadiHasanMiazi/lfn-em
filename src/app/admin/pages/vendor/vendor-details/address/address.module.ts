import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressRoutingModule } from './address-routing.module';
import { AddressComponent } from './address.component';
import { AddressSearchMapModule } from 'src/app/shared/address-search-map/address-search-map.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddressComponent
  ],
  imports: [
    CommonModule,
    AddressRoutingModule,
    AddressSearchMapModule,
    FormsModule
  ]
})
export class AddressModule { }
