import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NumberResult } from 'intl-input-phone';
import { Subscription } from 'rxjs';
import { IntlInputPhoneConfigService } from 'src/app/services/common-service/intl-input-phone-config.service';
import { TwoFactorAuthenticationService } from 'src/app/services/common-service/two-fa-authentication.service';

@Component({
  selector: 'phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.scss']
})
export class PhoneFormComponent implements OnInit, OnDestroy {

  @Output() continue = new EventEmitter();

  isLoading = false;
  phone: NumberResult;
  apiCall: Subscription;
  numberSubscription: Subscription;
  phoneForm: FormGroup = this.formBuilder.group({
    phone: new FormControl<NumberResult>(null, [Validators.required])
  })

  get phoneFields() {
    return this.phoneForm.controls
  }

  constructor(private formBuilder: FormBuilder, private twoFaAuth: TwoFactorAuthenticationService, public intlPhoneConfig: IntlInputPhoneConfigService) {
  }
  ngOnDestroy(): void {
    // this.apiCall.unsubscribe();
  }

  ngOnInit(): void {

  }
  setPhone() {
    this.intlPhoneConfig.setValue('01678116782', 'BD');
  }

  submit() {
    // console.log(this.phoneForm.get('phone').value?.Number);
    if (this.phoneForm.get('phone').value?.Number) {
      this.isLoading = true;
      let phoneNumber = this.phoneForm.get('phone').value?.Number.replaceAll(' ', '');
      phoneNumber = phoneNumber.replaceAll(')', '');
      phoneNumber = phoneNumber.replaceAll('(', '');
      phoneNumber = phoneNumber.replaceAll('-', '');
      this.twoFaAuth.phone2fa(phoneNumber).subscribe({
        next: (response) => {
          console.log(response);
          this.continue.emit(phoneNumber);
          this.isLoading = false;
        },
        error: (error) => {
          console.log(error);
        }
      })
    }

    // console.log(this.phoneFields.phone?.Number);


    // this.twoFaAuth.emailTwoFa(this.email).subscribe({
    //   next: (data) => {
    //     console.log(data);
    //     this.continue.emit(this.email);
    //     this.isLoading = false;
    //   },
    //   error: (error) => {
    //     console.log(error);
    //     this.isLoading = false;
    //   }
    // })

  }

}
