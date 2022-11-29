import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUserInfo } from 'src/app/models/interfaces/user.interfaces';

@Component({
  selector: 'address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
})
export class AddressFormComponent implements OnInit {
  @Input() userInfo!: IUserInfo;
  @Output() continue = new EventEmitter();

  completeAccountPayloads: IUserInfo;

  isLoading = false;

  constructor(private formBuilder: FormBuilder) { }

  addressFormGroup: FormGroup = this.formBuilder.group({
    Address: ['', Validators.required],
    Location: [''],
  });

  get addressFormFields() {
    return this.addressFormGroup.controls;
  }

  ngOnInit(): void { }

  addressSelected(address) {
    this.addressFormGroup.get('Address').setValue(address.formatted_address);
  }
  submit() {
    // console.log(this.addressFormGroup);
    if (this.userInfo !== undefined && this.addressFormGroup.get('Address').errors == null) {
      const address =
        this.addressFormGroup.get('Address').value +
        ' ' +
        this.addressFormGroup.get('Location').value;
      this.completeAccountPayloads = { address: address, ...this.userInfo };
      this.continue.emit(this.completeAccountPayloads);
    }
  }
}
