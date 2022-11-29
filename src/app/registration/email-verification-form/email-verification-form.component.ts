import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { AlertService } from 'src/app/services/alert/alert.service';
import { TwoFactorAuthenticationService } from 'src/app/services/common-service/two-fa-authentication.service';

@Component({
  selector: 'email-verification-form',
  templateUrl: './email-verification-form.component.html',
  styleUrls: ['./email-verification-form.component.scss']
})
export class EmailVerificationFormComponent implements OnInit, OnDestroy {

  counter = 500;
  @Input() email!: string;
  @Output() continue = new EventEmitter()
  isLoading = false;
  apiCall: Subscription;
  isClearOtp = false;

  constructor(private twoFaAuth: TwoFactorAuthenticationService, private alertService: AlertService) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    // this.apiCall.unsubscribe();
  }

  verifyOtp(otp: any) {
    this.isLoading = true;
    this.isClearOtp = false;
    this.twoFaAuth.verifyOTP({ Key: this.email, Code: otp }).subscribe({
      next: (res: any) => {
        if (res.errors == null) {
          this.continue.emit(otp);
          this.isLoading = false;
        } else {
          this.alertService.error('The OTP code is not valid');
          this.isClearOtp = true;
          this.isLoading = false;
        }
      },
      error: (error) => {
        // console.log(error);
        this.alertService.error('The OTP code is not valid');
        this.isLoading = false;
        this.isClearOtp = true;
      }
    });

  }

  resendOtp() {
    this.isLoading = true;
    this.twoFaAuth.email2fa(this.email).subscribe({
      next: () => {
        this.alertService.success('An OTP code has been sent to your email again');
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
