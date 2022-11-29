import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BrokerListRoutingModule } from "./broker-list-routing.module";
import { BrokerListComponent } from "./broker-list.component";
import { TableSearchFieldModule } from "../../../../shared/table-search-field/table-search-field.module";
import { ListTableModule } from "../../../../shared/list-table/list-table.module";
import { UserThumbNameModule } from "../../../../shared/user-thumb-name/user-thumb-name.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { BrokerAddModule } from "../broker-add/broker-add.module";
import { BtnLoaderModule } from "../../../../shared/btn-loader/btn-loader.module";

@NgModule({
  declarations: [BrokerListComponent],
  imports: [
    CommonModule,
    BrokerListRoutingModule,
    TableSearchFieldModule,
    FormsModule,
    ListTableModule,
    UserThumbNameModule,
    NgbModule,
    BrokerAddModule,
    BtnLoaderModule,
  ],
})
export class BrokerListModule {}
