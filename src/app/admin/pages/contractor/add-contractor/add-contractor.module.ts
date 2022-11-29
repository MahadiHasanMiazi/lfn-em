import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContractorComponent } from './add-contractor.component';
import { ReactiveFormsModule } from "@angular/forms";
import { BtnLoaderModule } from "../../../../shared/btn-loader/btn-loader.module";
import { RouterLinkWithHref } from "@angular/router";
import { InputFieldModule } from 'src/app/shared/input-field/input-field.module';


@NgModule({
  declarations: [
    AddContractorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BtnLoaderModule,
    RouterLinkWithHref,
    InputFieldModule
  ],
  exports: [
    AddContractorComponent
  ]
})
export class AddContractorModule { }
