import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageInvitationRoutingModule } from './manage-invitation-routing.module';
import { ManageInvitationComponent } from './manage-invitation.component';
import { TableSearchFieldModule } from 'src/app/shared/table-search-field/table-search-field.module';
import { ListTableModule } from 'src/app/shared/list-table/list-table.module';
import { UserThumbNameModule } from 'src/app/shared/user-thumb-name/user-thumb-name.module';


@NgModule({
  declarations: [
    ManageInvitationComponent
  ],
  imports: [
    CommonModule,
    ManageInvitationRoutingModule,
    TableSearchFieldModule,
    ListTableModule,
    UserThumbNameModule
  ]
})
export class ManageInvitationModule { }
