import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NgForm, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => InputFieldComponent)
  }]
})
export class InputFieldComponent implements OnInit, ControlValueAccessor {

  @Input() label: string = '';
  @Input() required = false;
  @Input() parentForm: FormGroup;
  @Input() parentFormRef!: NgForm;
  @Input() fieldName: string;
  @Input() placeholder: string = '';
  @Input() errorMessages = new BehaviorSubject<[]>([]);

  id: string;
  errorsToShow = [];

  constructor() {
  }
  // code for reactive form binding to work in custom Component
  value: string = '';
  onChange: any = (value: string) => { };
  onTouched: any = () => { };
  disabled = false;
  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  // end of code for reactive form binding in custom component

  get formField() {
    return this.parentForm?.get(this.fieldName) as FormControl
  }

  ngOnInit(): void {
    this.id = this.label.replaceAll(' ', '').replaceAll('/', '');
    // this.errorMessages.subscribe((msg) => {
    //   this.errorsToShow = []
    //   // if (!msg) {
    //   // }
    //   if (!this.errorsToShow.includes(msg)) {
    //     this.errorsToShow.push(msg);
    //   }
    // });
  }

}
