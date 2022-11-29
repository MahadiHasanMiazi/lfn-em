import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AcknowledgementModalModule } from '../common/acknowledgement-modal/acknowledgement-modal.module';
import { PipeModule } from '../pipe/pipe.module';
import { AlertModule } from '../shared/alert/alert.module';
import { BtnLoaderModule } from '../shared/btn-loader/btn-loader.module';
import { VerifyOtpModule } from '../shared/verify-otp/verify-otp.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ForgotPasswordFormComponent } from './forgot-password-form/forgot-password-form.component';

@NgModule({
  declarations: [LoginComponent, LoginFormComponent, ForgotPasswordFormComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    VerifyOtpModule,
    PipeModule,
    BtnLoaderModule,
    AlertModule,
    NgbModule,
    AcknowledgementModalModule,
    AlertModule
  ],
})
export class LoginModule { }
