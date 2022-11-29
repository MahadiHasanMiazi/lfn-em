import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorComponent } from './vendor.component';
import { TableSearchFieldModule } from 'src/app/shared/table-search-field/table-search-field.module';
import { ListTableModule } from 'src/app/shared/list-table/list-table.module';
import { InviteVendorModule } from '../invite-vendor/invite-vendor.module';


@NgModule({
  declarations: [
    VendorComponent
  ],
  imports: [
    CommonModule,
    VendorRoutingModule,
    TableSearchFieldModule,
    ListTableModule,
    InviteVendorModule
  ]
})
export class VendorModule { }
