import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { TwoFactorAuthApiEndpoint } from '../../helper/api-url.config';

// Payloads
export interface VerifyCodePayload {
  Key: string;
  Code: string;
}
export interface EmailTwoFaPayload {
  Email: string;
  TemplateName: 'AccountActivationCode';
}

export interface PhoneTwoFaPayload {
  Phone: string;
  TemplateName: 'TwoFactorAuthencation';
}

export interface TwoFaIsVerifiedPayload {
  Phone: string;
  Email: string;
}
export interface Complete2FaPayload {
  Phone: string;
  Email: string;
}
export interface VerifyUam2faPayload {
  UserName: string;
  Code: string;
}

@Injectable({
  providedIn: 'root',
})
export class TwoFactorAuthenticationService {
  constructor(private readonly httpClient: HttpClient) { }

  verifyOTP(payload: VerifyCodePayload) {
    const body = { ...payload, IsAShortLifeCode: false };
    return this.httpClient.post(
      environment.BASE_URL + TwoFactorAuthApiEndpoint.verifyOTP,
      body
    );
  }

  verifyUAM2fa(payload: VerifyUam2faPayload) {
    return this.httpClient.post(
      environment.BASE_URL + TwoFactorAuthApiEndpoint.verifyUAM2FACode,
      payload
    );
  }

  phoneOrEmail2fa(payload: { UserName: string }) {
    return this.httpClient.post(
      environment.BASE_URL +
      TwoFactorAuthApiEndpoint.emailOrPhone +
      '?UserName=' +
      payload.UserName,
      {}
    );
  }

  email2fa(email: string) {
    const payload = { Email: email, TemplateName: "AccountActivationCode" }
    return this.httpClient.post(
      environment.BASE_URL + TwoFactorAuthApiEndpoint.emailTwoFa,
      payload
    );
  }

  phone2fa(phone: string) {
    const payload = { Phone: phone, TemplateName: "TwoFactorAuthencation" }
    return this.httpClient.post(
      environment.BASE_URL + TwoFactorAuthApiEndpoint.phoneTwoFa,
      payload
    );
  }

  isVerified(payload: TwoFaIsVerifiedPayload) {
    return this.httpClient.post(
      environment.BASE_URL + TwoFactorAuthApiEndpoint.isVerified,
      payload
    );
  }

  complete2Fa(payload: Complete2FaPayload) {
    return this.httpClient.post(
      environment.BASE_URL + TwoFactorAuthApiEndpoint.completeTwoFa,
      payload
    );
  }
}
