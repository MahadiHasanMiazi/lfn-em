import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyOtpComponent } from './verify-otp.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { BtnLoaderModule } from '../btn-loader/btn-loader.module';

@NgModule({
  declarations: [VerifyOtpComponent],
  imports: [CommonModule, NgOtpInputModule, BtnLoaderModule],
  exports: [VerifyOtpComponent],
})
export class VerifyOtpModule {}
