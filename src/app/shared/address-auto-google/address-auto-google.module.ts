import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressAutoGoogleComponent } from './address-auto-google.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AddressAutoGoogleComponent
  ],
    imports: [
        CommonModule,
        GooglePlaceModule,
        ReactiveFormsModule
    ],
  exports: [
    AddressAutoGoogleComponent
  ]
})
export class AddressAutoGoogleModule { }
