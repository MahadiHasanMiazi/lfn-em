import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorDetailsRoutingModule } from './vendor-details-routing.module';
import { VendorDetailsComponent } from './vendor-details.component';
import { InnerSidebarModule } from 'src/app/shared/inner-sidebar/inner-sidebar.module';


@NgModule({
  declarations: [
    VendorDetailsComponent
  ],
  imports: [
    CommonModule,
    VendorDetailsRoutingModule,
    InnerSidebarModule
  ]
})
export class VendorDetailsModule { }
