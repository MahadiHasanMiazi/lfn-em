import { Component, EventEmitter, forwardRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { AutoSearchParams } from "../../models/auto-search/auto-search-params";

@Component({
  selector: 'address-auto-google',
  templateUrl: './address-auto-google.component.html',
  styleUrls: ['./address-auto-google.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => AddressAutoGoogleComponent)
  }]
})
export class AddressAutoGoogleComponent implements OnInit, ControlValueAccessor {

  @Input() label: string = 'Address';
  @Input() required: boolean = false;
  @Output() onAddressChange = new EventEmitter();
  @ViewChild("addressRef") addressRef: GooglePlaceDirective;
  @Input() params: AutoSearchParams

  constructor() { }
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

  ngOnInit(): void {
  }

  handleAddressChange(address: any) {
    this.onAddressChange.emit(address);
  }

}
