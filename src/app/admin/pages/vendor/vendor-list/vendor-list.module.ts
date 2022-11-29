import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorListRoutingModule } from './vendor-list-routing.module';
import { VendorListComponent } from './vendor-list.component';
import { TableSearchFieldModule } from 'src/app/shared/table-search-field/table-search-field.module';
import { ListTableModule } from 'src/app/shared/list-table/list-table.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserThumbNameModule } from 'src/app/shared/user-thumb-name/user-thumb-name.module';
import { AddVendorModule } from '../add-vendor/add-vendor.module';


@NgModule({
  declarations: [
    VendorListComponent
  ],
  imports: [
    CommonModule,
    VendorListRoutingModule,
    TableSearchFieldModule,
    ListTableModule,
    UserThumbNameModule,
    AddVendorModule,
    NgbModule
  ]
})
export class VendorListModule { }
