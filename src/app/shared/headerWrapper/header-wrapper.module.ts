import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HeaderWrapperComponent } from "./header-wrapper.component";

@NgModule({
  declarations: [HeaderWrapperComponent],
  imports: [CommonModule, RouterModule, NgbModule],
  exports: [HeaderWrapperComponent],
})
export class HeaderWrapperModule { }
