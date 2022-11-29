import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableSearchFieldComponent } from "./table-search-field.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [TableSearchFieldComponent],
  imports: [CommonModule, FormsModule],
  exports: [TableSearchFieldComponent],
})
export class TableSearchFieldModule {}
