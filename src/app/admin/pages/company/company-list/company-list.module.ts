import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyListRoutingModule } from './company-list-routing.module';
import { CompanyListComponent } from './company-list.component';
import { TableSearchFieldModule } from 'src/app/shared/table-search-field/table-search-field.module';
import { ListTableModule } from 'src/app/shared/list-table/list-table.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserThumbNameModule } from 'src/app/shared/user-thumb-name/user-thumb-name.module';
import { AddCompanyModule } from '../add-company/add-company.module';


@NgModule({
  declarations: [
    CompanyListComponent
  ],
  imports: [
    CommonModule,
    CompanyListRoutingModule,
    TableSearchFieldModule,
    ListTableModule,
    UserThumbNameModule,
    AddCompanyModule,
    NgbModule
  ]
})
export class CompanyListModule { }
