import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AlertComponent } from "./alert.component";
// import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [AlertComponent],
  imports: [CommonModule, RouterModule],
  exports: [AlertComponent],
})
export class AlertModule { }
