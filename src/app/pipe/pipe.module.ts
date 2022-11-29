import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatTimePipe } from './timer.pipe';



@NgModule({
  declarations: [
    FormatTimePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormatTimePipe
  ]
})
export class PipeModule { }
