import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs";
import { AuthApiEndPoint } from "src/app/helper/api-url.config";
import { environment } from "src/environments/environment";
import { AlertService } from "../alert/alert.service";
import { TokensService } from "../tokens.service";
//import * as CryptoJS from 'crypto-js';

export interface LoginApiPayload {
  username: string;
  password: string;
}

export interface OtpVerificationPayload {
  username: string;
  code: string;
}

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private readonly tokenService: TokensService, private readonly http: HttpClient) { }

  // getUserName(): string {
  //   let user = JSON.parse(this.decryptLocalStorage() || '{}');
  //   return user.Email;
  // }
  // getRole(): number {
  //   let user = JSON.parse(this.decryptLocalStorage() || '{}');
  //   return user ? user.RoleId : user;
  // }

  // getId(): number {
  //   let user = JSON.parse(this.decryptLocalStorage() || '{}');
  //   return user ? user.UserId : user;
  // }

  // getAckStatus(): boolean {
  //   let user = JSON.parse(this.decryptLocalStorage() || '{}');
  //   return user ? user.AckStatus : user;
  // }
  // getUserType(): string {
  //   let user = JSON.parse(this.decryptLocalStorage() || '{}');
  //   return user ? user.UserType : user;
  // }
  // getHasPatients(): boolean {
  //   let user = JSON.parse(this.decryptLocalStorage() || '{}');
  //   return user ? user.HasPatients : user;
  // }

  // getIsAuthorized(): boolean {
  //   let user = JSON.parse(this.decryptLocalStorage() || '{}');
  //   return user ? user.IsAuthorized : user;
  // }

  /**
   * User login api
   * @param payload - LoginApiPayload
   * @returns
   */
  sendLoginOtp(payload: LoginApiPayload) {
    const params = new URLSearchParams({
      grant_type: "password",
      ...payload,
    });

    return this.http.post(environment.BASE_URL + AuthApiEndPoint.identity, params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  }

  getTokenUsingOtp(payload: OtpVerificationPayload) {
    const params = new URLSearchParams({
      grant_type: "two_fa_login",
      ...payload,
    });

    return this.http
      .post(environment.BASE_URL + AuthApiEndPoint.identity, params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .pipe(
        tap((data: any) => {
          this.tokenService.storeUserToken(data.payload);
        })
      );
  }

  sendForgotPasswordOtpApi(payload: { email: string }) {
    return this.http.post(
      environment.BASE_URL + AuthApiEndPoint.sentForgotPasswordOtp(payload),
      {},
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
  }

  resetPasswordUsingCode(payload: { UserName: string; Code: string; NewPassword: string }) {
    return this.http.post(environment.BASE_URL + AuthApiEndPoint.resetPassword, payload);
  }

  acknowledgeUser(email: string) {
    return this.http.put(environment.BASE_URL + AuthApiEndPoint.acknowledge, {
      UserName: email,
    });
  }

  logout() {
    const { refresh_token } = this.tokenService.getUserToken();
    return this.http.post(environment.BASE_URL + AuthApiEndPoint.logout + `?refreshToken=${refresh_token}`, {})
  }
}
