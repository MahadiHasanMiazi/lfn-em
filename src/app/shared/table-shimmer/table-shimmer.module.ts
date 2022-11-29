import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableShimmerComponent } from './table-shimmer.component';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';



@NgModule({
  declarations: [
    TableShimmerComponent
  ],
  imports: [
    CommonModule,
    NgxShimmerLoadingModule
  ],
  exports: [
    TableShimmerComponent
  ]
})
export class TableShimmerModule { }
