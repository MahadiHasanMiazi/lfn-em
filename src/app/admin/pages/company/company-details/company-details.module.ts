import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyDetailsRoutingModule } from './company-details-routing.module';
import { CompanyDetailsComponent } from './company-details.component';
import { InnerSidebarModule } from 'src/app/shared/inner-sidebar/inner-sidebar.module';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { BtnLoaderModule } from 'src/app/shared/btn-loader/btn-loader.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CompanyDetailsComponent
  ],
  imports: [
    CommonModule,
    CompanyDetailsRoutingModule,
    InnerSidebarModule,
    NgxShimmerLoadingModule,
    BtnLoaderModule,
    RouterModule
  ]
})
export class CompanyDetailsModule { }
