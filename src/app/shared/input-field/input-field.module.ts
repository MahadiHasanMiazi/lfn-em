import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from './input-field.component';
import { FieldErrorsComponent } from './field-errors/field-errors.component';



@NgModule({
  declarations: [
    InputFieldComponent,
    FieldErrorsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputFieldComponent,
    FieldErrorsComponent
  ]
})
export class InputFieldModule { }
