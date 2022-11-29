import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeListRoutingModule } from './employee-list-routing.module';
import { EmployeeListComponent } from './employee-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableSearchFieldModule } from 'src/app/shared/table-search-field/table-search-field.module';
import { ListTableModule } from 'src/app/shared/list-table/list-table.module';
import { UserThumbNameModule } from 'src/app/shared/user-thumb-name/user-thumb-name.module';
import { AddEmployeeModule } from '../add-employee/add-employee.module';


@NgModule({
  declarations: [
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    EmployeeListRoutingModule,
    NgbModule,
    TableSearchFieldModule,
    ListTableModule,
    UserThumbNameModule,
    AddEmployeeModule
  ]
})
export class EmployeeListModule { }
