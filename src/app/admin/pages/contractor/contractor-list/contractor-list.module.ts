import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContractorListRoutingModule } from "./contractor-list-routing.module";
import { ContractorListComponent } from "./contractor-list.component";
import { TableSearchFieldModule } from "../../../../shared/table-search-field/table-search-field.module";
import { ListTableModule } from "../../../../shared/list-table/list-table.module";
import { UserThumbNameModule } from "../../../../shared/user-thumb-name/user-thumb-name.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AddContractorModule } from "../add-contractor/add-contractor.module";
import { BtnLoaderModule } from "../../../../shared/btn-loader/btn-loader.module";

@NgModule({
  declarations: [ContractorListComponent],
  imports: [
    CommonModule,
    ContractorListRoutingModule,
    TableSearchFieldModule,
    ListTableModule,
    UserThumbNameModule,
    NgbModule,
    AddContractorModule,
    BtnLoaderModule,
  ],
})
export class ContractorListModule {}
