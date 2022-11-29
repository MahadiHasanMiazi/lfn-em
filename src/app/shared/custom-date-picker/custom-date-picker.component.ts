import { Component, forwardRef, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'custom-date-picker',
  templateUrl: './custom-date-picker.component.html',
  styleUrls: ['./custom-date-picker.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => CustomDatePickerComponent)
  }]
})
export class CustomDatePickerComponent implements OnInit, ControlValueAccessor {
  public maximumDate =
    {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      day: new Date().getDate(),
    }
  public minimumDate = { year: 1872, month: 1, day: 1 };
  isValidStartDate = false;
  @ViewChild('d') datePicker: any;

  value: NgbDateStruct = null;
  constructor() { }
  onChange: any = (value: any) => { };
  onTouched: any = () => { };
  disabled = false;
  writeValue(value: any): void {
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

  ngOnInit(): void {
  }

  public toggleDatePicker(): void {
    if (this.datePicker.isOpen()) {
      this.datePicker.close();
    }
  }
  inputDateFRomCalender(e) {
    this.onChange(e);
    let dateSplite = e.split("/");
    if (dateSplite.length == 3) {
      if (
        dateSplite[2].length == 4 &&
        dateSplite[0] != "" &&
        dateSplite[1] != ""
      ) {
        const age = new Date().getFullYear() - Number(dateSplite[2]);
        if (age > 120 && age < 0) {
          this.isValidStartDate = false;
          return;
        } else {
          this.isValidStartDate = true;
          let date: NgbDateStruct = {
            year: Number(dateSplite[2]),
            month: Number(dateSplite[0]),
            day: Number(dateSplite[1]),
          };
          // this.value = date;
          this.onChange(date);
        }
      }
    }
  }
  onDateSelect(ev) {
    this.onChange(ev);
    this.isValidStartDate = true;
  }
  onBlurMethodDateOfBirth(e) {
    this.onTouched();
    if (e != undefined && e.length >= 3) {
      let dateSplite = e.split("/");
      if (dateSplite.length != 3) {
        this.value = null;
        this.onChange(null);
      }
      if (dateSplite.length == 3) {
        if (dateSplite[2].length != 4) {
          this.value = null;
          this.onChange(null);
        }
        else {
          const age = new Date().getFullYear() - Number(dateSplite[2]);
          if (age > 120 || age < 0) {
            this.isValidStartDate = false;
            this.value = null;
            this.onChange(null);
          }
          else {
            let date: NgbDateStruct = {
              year: Number(dateSplite[2]),
              month: Number(dateSplite[0]),
              day: Number(dateSplite[1]),
            };
            this.onChange(date);
          }
        }
      }
    }

  }
}
