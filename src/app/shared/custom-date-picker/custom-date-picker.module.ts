import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDatePickerComponent } from './custom-date-picker.component';
import { NgbDateParserFormatter, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DateMaskDirectiveModuleModule } from 'src/app/directives/date-mask-directive-module/date-mask-directive-module.module';
import { FormsModule } from '@angular/forms';
import { NgbDateFRParserFormatter } from 'src/app/helper/ngbDateFRParserFormatter.service';



@NgModule({
  declarations: [CustomDatePickerComponent],
  imports: [
    CommonModule,
    NgbModule,
    DateMaskDirectiveModuleModule,
    FormsModule
  ],
  exports: [CustomDatePickerComponent],
  providers: [
    { provide: NgbDateParserFormatter, useClass: NgbDateFRParserFormatter }
  ]
})
export class CustomDatePickerModule { }
