import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IntlInputPhoneModule } from 'intl-input-phone';
import { PipeModule } from '../pipe/pipe.module';
import { AddressAutoGoogleModule } from '../shared/address-auto-google/address-auto-google.module';
import { BtnLoaderModule } from '../shared/btn-loader/btn-loader.module';
import { VerifyOtpModule } from '../shared/verify-otp/verify-otp.module';
import { AddressFormComponent } from './address-form/address-form.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { EmailVerificationFormComponent } from './email-verification-form/email-verification-form.component';
import { PhoneFormComponent } from './phone-form/phone-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertModule } from '../shared/alert/alert.module';
import { CustomDatePickerModule } from '../shared/custom-date-picker/custom-date-picker.module';
import { PhoneVerificationFormComponent } from './phone-verification-form/phone-verification-form.component';
import { RegistrationFormWrapperComponent } from './registration-form-wrapper/registration-form-wrapper.component';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { UserInformationFormComponent } from './user-information-form/user-information-form.component';
import { AcknowledgementModalModule } from '../common/acknowledgement-modal/acknowledgement-modal.module';
import { RouterModule } from '@angular/router';
import { PasswordFormComponent } from './password-form/password-form.component';


@NgModule({
  declarations: [
    RegistrationComponent,
    EmailFormComponent,
    RegistrationFormWrapperComponent,
    PhoneVerificationFormComponent,
    UserInformationFormComponent,
    AddressFormComponent,
    EmailVerificationFormComponent,
    PhoneFormComponent,
    PasswordFormComponent,
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    VerifyOtpModule,
    BtnLoaderModule,
    PipeModule,
    IntlInputPhoneModule,
    AddressAutoGoogleModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    AlertModule,
    CustomDatePickerModule,
    AcknowledgementModalModule,
    RouterModule
  ]
})
export class RegistrationModule { }
