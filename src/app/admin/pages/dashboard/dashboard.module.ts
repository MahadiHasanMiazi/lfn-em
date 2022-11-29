import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {AdminModule} from "../../admin.module";
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import {TableSearchFieldModule} from "../../../shared/table-search-field/table-search-field.module";
import {ListTableModule} from "../../../shared/list-table/list-table.module";
import {UserThumbNameModule} from "../../../shared/user-thumb-name/user-thumb-name.module";
import {
  MultipleMarkersGoogleMapModule
} from "../../../shared/multiple-markers-google-map/multiple-markers-google-map.module";
import {GoogleMapModule} from "../../../shared/google-map/google-map.module";
import {SearchFieldModule} from "../../../shared/search-field/search-field.module";


@NgModule({
  declarations: [
    DashboardComponent
  ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        AdminModule,
        NgbDropdownModule,
        TableSearchFieldModule,
        ListTableModule,
        UserThumbNameModule,
        MultipleMarkersGoogleMapModule,
        GoogleMapModule,
        SearchFieldModule
    ]
})
export class DashboardModule { }
