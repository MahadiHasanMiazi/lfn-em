import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEventComponent } from './add-event.component';
import { AppDropzoneModule } from 'src/app/shared/app-dropzone/app-dropzone.module';
import { AddressAutoGoogleModule } from 'src/app/shared/address-auto-google/address-auto-google.module';
import { RouterModule } from '@angular/router';
import { BtnLoaderModule } from 'src/app/shared/btn-loader/btn-loader.module';
import { GoogleMapModule } from 'src/app/shared/google-map/google-map.module';
import { AutocompleteDropdownModule } from 'src/app/shared/autocomplete-dropdown/autocomplete-dropdown.module';



@NgModule({
  declarations: [
    AddEventComponent
  ],
  imports: [
    CommonModule,
    AppDropzoneModule,
    AddressAutoGoogleModule,
    RouterModule,
    BtnLoaderModule,
    GoogleMapModule,
    AutocompleteDropdownModule
  ],
  exports: [
    AddEventComponent
  ]
})
export class AddEventModule { }
