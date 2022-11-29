import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamDetailsRoutingModule } from './team-details-routing.module';
import { TeamDetailsComponent } from './team-details.component';
import { TableSearchFieldModule } from 'src/app/shared/table-search-field/table-search-field.module';
import { ListTableModule } from 'src/app/shared/list-table/list-table.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    TeamDetailsComponent
  ],
  imports: [
    CommonModule,
    TeamDetailsRoutingModule,
    ListTableModule,
    NgbModule
  ]
})
export class TeamDetailsModule { }
