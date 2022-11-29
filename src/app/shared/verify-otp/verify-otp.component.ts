import { Component, Input, OnInit, Output, EventEmitter, ViewChild, OnChanges, SimpleChange } from "@angular/core";
import { Subscription, timer } from "rxjs";

@Component({
  selector: "verify-otp",
  templateUrl: "./verify-otp.component.html",
  styleUrls: ["./verify-otp.component.scss"],
})
export class VerifyOtpComponent implements OnInit, OnChanges {
  @Input() digits: number = 6;
  @Input() isLoading: boolean = false;
  @Input() clearOtp: boolean = false;
  @Output() onOtpInput: EventEmitter<any> = new EventEmitter();
  @Output() count: EventEmitter<any> = new EventEmitter();
  @Output() onResendOtp = new EventEmitter();

  @ViewChild("ngOtpInput") ngOtpInputRef: any;

  isSubmitVerify: boolean = false;
  config = {
    allowNumbersOnly: true,
    length: this.digits,
    placeholder: "-",
  };
  otp: string = "";
  countDown: Subscription;
  counter = 300;
  tick = 1000;

  constructor() { }
  ngOnChanges(changes: { [property: string]: SimpleChange }): void {
    const isClearOtpChange = changes["clearOtp"];
    if (isClearOtpChange?.currentValue == true) {
      this.ngOtpInputRef?.setValue(null);
      this.clearOtp = false;
    }

    const isLoadingChange = changes["isLoading"];
    // if (isLoadingChange?.currentValue == true) {
    // }

    // console.log(isLoadingChange);
    if (isLoadingChange?.currentValue) {
      this.ngOtpInputRef?.otpForm.disable();
    } else {
      this.ngOtpInputRef?.otpForm.enable();
    }
  }

  ngOnInit(): void {
    this.startCounter();
    this.config.length = this.digits;

    // this.clearOtp.subscribe((status) => {
    //   if (status) {
    //     this.ngOtpInputRef.setValue("");
    //   }
    // });
  }

  otpChanged(ev: any) {
    this.isSubmitVerify = false;
    if (ev.length == this.digits) {
      this.onOtpInput.emit(ev);
    } else {
      this.otp = ev;
    }
  }

  startCounter() {
    this.countDown = timer(0, this.tick).subscribe(() => {
      --this.counter;
      this.count.emit(this.counter);
      if (this.counter == 0) {
        this.countDown.unsubscribe();
      }
    });
  }

  handleClickVerifyOTP() {
    this.isLoading = true;
    this.isSubmitVerify = false;
    if (this.otp.length == this.digits) {
      this.onOtpInput.emit(this.otp);
    } else {
      this.isSubmitVerify = true;
      this.isLoading = false;
    }
  }

  reSendOTP() {
    this.counter = 300;
    this.onResendOtp.emit();
  }
}
