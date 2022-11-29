import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SidebarWrapperComponent } from "./sidebar-wrapper.component";

@NgModule({
  declarations: [SidebarWrapperComponent],
  imports: [CommonModule, RouterModule, NgbModule],
  exports: [SidebarWrapperComponent],
})
export class SidebarWrapperModule { }
