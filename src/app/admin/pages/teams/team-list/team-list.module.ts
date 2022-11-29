import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamListComponent } from './team-list.component';
import { TeamsListRoutingModule } from './team-list-routing.module';
import { TableSearchFieldModule } from 'src/app/shared/table-search-field/table-search-field.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListTableModule } from 'src/app/shared/list-table/list-table.module';
import { AddTeamModule } from '../add-team/add-team.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TeamListComponent
  ],
  imports: [
    CommonModule,
    TeamsListRoutingModule,
    TableSearchFieldModule,
    ListTableModule,
    NgbModule,
    AddTeamModule,
    FormsModule
  ]
})
export class TeamListModule { }
