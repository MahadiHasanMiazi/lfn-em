import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InviteStaffComponent } from './invite-staff.component';
import { TableSearchFieldModule } from 'src/app/shared/table-search-field/table-search-field.module';
import { RouterModule } from '@angular/router';
import { ShiftDetailsComponent } from './shift-details/shift-details.component';
import { AddressAutoGoogleModule } from 'src/app/shared/address-auto-google/address-auto-google.module';



@NgModule({
  declarations: [
    InviteStaffComponent,
    ShiftDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TableSearchFieldModule,
    AddressAutoGoogleModule
  ],
  exports: [
    InviteStaffComponent
  ]
})
export class InviteStaffModule { }
