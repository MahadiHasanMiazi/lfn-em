import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventListRoutingModule } from './event-list-routing.module';
import { EventListComponent } from './event-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableSearchFieldModule } from 'src/app/shared/table-search-field/table-search-field.module';
import { FormsModule } from '@angular/forms';
import { ListTableModule } from 'src/app/shared/list-table/list-table.module';
import { AddEventModule } from '../add-event/add-event.module';


@NgModule({
  declarations: [
    EventListComponent
  ],
  imports: [
    CommonModule,
    EventListRoutingModule,
    NgbModule,
    TableSearchFieldModule,
    ListTableModule,
    FormsModule,
    AddEventModule
  ]
})
export class EventListModule { }
