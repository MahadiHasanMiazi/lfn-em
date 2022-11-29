import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { UserListComponent } from './user-list.component';
import { TableSearchFieldModule } from 'src/app/shared/table-search-field/table-search-field.module';
import { ListTableModule } from 'src/app/shared/list-table/list-table.module';
import { UserThumbNameModule } from 'src/app/shared/user-thumb-name/user-thumb-name.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddUserModule } from '../add-user/add-user.module';


@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserListRoutingModule,
    TableSearchFieldModule,
    ListTableModule,
    UserThumbNameModule,
    NgbModule,
    AddUserModule
  ]
})
export class UserListModule { }
