import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InviteVendorComponent } from './invite-vendor.component';
import { RouterModule } from '@angular/router';
import { TableSearchFieldModule } from 'src/app/shared/table-search-field/table-search-field.module';



@NgModule({
  declarations: [
    InviteVendorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TableSearchFieldModule
  ],
  exports: [
    InviteVendorComponent
  ]
})
export class InviteVendorModule { }
