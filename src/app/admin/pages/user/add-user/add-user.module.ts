import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddUserComponent } from "./add-user.component";
import { RouterModule } from "@angular/router";
import { IntlInputPhoneModule } from "intl-input-phone";
import { BtnLoaderModule } from "src/app/shared/btn-loader/btn-loader.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AddUserComponent],
  imports: [CommonModule, RouterModule, IntlInputPhoneModule, BtnLoaderModule, FormsModule, ReactiveFormsModule],
  exports: [AddUserComponent],
})
export class AddUserModule {}
