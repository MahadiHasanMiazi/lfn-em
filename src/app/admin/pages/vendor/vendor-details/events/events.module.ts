import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { ListTableModule } from 'src/app/shared/list-table/list-table.module';
import { TableSearchFieldModule } from 'src/app/shared/table-search-field/table-search-field.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    EventsComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    ListTableModule,
    TableSearchFieldModule,
    NgbModule
  ]
})
export class EventsModule { }
