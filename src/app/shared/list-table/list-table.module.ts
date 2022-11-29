import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTableComponent } from './list-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableShimmerModule } from '../table-shimmer/table-shimmer.module';
import { NoDataModule } from '../no-data/no-data.module';



@NgModule({
  declarations: [ListTableComponent],
  imports: [
    CommonModule,
    NgbModule,
    TableShimmerModule,
    NoDataModule
  ],
  exports: [
    ListTableComponent
  ]
})
export class ListTableModule { }
