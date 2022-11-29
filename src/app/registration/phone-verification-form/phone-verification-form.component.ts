import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertService } from 'src/app/services/alert/alert.service';
import { TwoFactorAuthenticationService } from 'src/app/services/common-service/two-fa-authentication.service';

@Component({
  selector: 'phone-verification-form',
  templateUrl: './phone-verification-form.component.html',
  styleUrls: ['./phone-verification-form.component.scss']
})
export class PhoneVerificationFormComponent implements OnInit {

  counter = 500;

  @Input() phone!: string;

  @Output() continue = new EventEmitter()

  isLoading = false;
  isClearOtp = false;

  constructor(private twoFaAuth: TwoFactorAuthenticationService, private alertService: AlertService) { }

  ngOnInit(): void {
  }

  // submit() {
  //   this.continue.emit('phone');
  // }

  verifyOtp(otp: any) {
    console.log(otp);
    this.isLoading = true;
    this.isClearOtp = false;
    this.twoFaAuth.verifyOTP({ Key: String(this.phone), Code: otp }).subscribe({
      next: (res: any) => {
        if (res.errors == null) {
          this.continue.emit(otp);
          this.isLoading = false;
        }
        else {
          this.alertService.error('The OTP code is not valid');
          this.isClearOtp = true;
          this.isLoading = false;
        }
      },
      error: (error) => {
        this.alertService.error('The OTP code is not valid');
        this.isLoading = false;
        this.isClearOtp = true;
      }
    });

  }

  resendOtp() {
    this.isLoading = true;
    this.twoFaAuth.phone2fa(this.phone).subscribe({
      next: () => {
        this.alertService.error('An OTP code has been sent to your phone again');
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.alertService.error('Unknown Error');
        this.isLoading = false;
      }
    })
  }

  updateCount(ev: any) {
    // console.log(ev);
    this.counter = ev;
  }
}
