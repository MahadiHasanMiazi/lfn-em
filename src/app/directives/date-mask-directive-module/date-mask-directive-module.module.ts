import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerMaskDirective } from './datepicker-mask.directive';



@NgModule({
  declarations: [DatepickerMaskDirective],
  imports: [
    CommonModule
  ],
  exports: [
    DatepickerMaskDirective
  ]
})
export class DateMaskDirectiveModuleModule { }
