import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressSearchMapComponent } from './address-search-map.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';



@NgModule({
  declarations: [
    AddressSearchMapComponent
  ],
  imports: [
    CommonModule,
    GooglePlaceModule
  ],
  exports: [
    AddressSearchMapComponent
  ]
})
export class AddressSearchMapModule { }
