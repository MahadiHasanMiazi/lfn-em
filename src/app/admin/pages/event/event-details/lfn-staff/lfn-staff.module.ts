import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LfnStaffRoutingModule } from './lfn-staff-routing.module';
import { LfnStaffComponent } from './lfn-staff.component';
import { TableSearchFieldModule } from 'src/app/shared/table-search-field/table-search-field.module';
import { ListTableModule } from 'src/app/shared/list-table/list-table.module';
import { UserThumbNameModule } from 'src/app/shared/user-thumb-name/user-thumb-name.module';
import { InviteStaffModule } from '../invite-staff/invite-staff.module';


@NgModule({
  declarations: [
    LfnStaffComponent
  ],
  imports: [
    CommonModule,
    LfnStaffRoutingModule,
    TableSearchFieldModule,
    ListTableModule,
    UserThumbNameModule,
    InviteStaffModule
  ]
})
export class LfnStaffModule { }
