import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultipleMarkersGoogleMapComponent } from './multiple-markers-google-map.component';
import {SearchFieldComponent} from "../search-field/search-field.component";
import {SearchFieldModule} from "../search-field/search-field.module";
import {AddressAutoGoogleModule} from "../address-auto-google/address-auto-google.module";



@NgModule({
  declarations: [
    MultipleMarkersGoogleMapComponent
  ],
    imports: [
        CommonModule,
        SearchFieldModule,
        AddressAutoGoogleModule,
    ],
  exports: [
    MultipleMarkersGoogleMapComponent
  ]
})
export class MultipleMarkersGoogleMapModule { }
