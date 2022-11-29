import { Component, OnInit } from '@angular/core';
import { ICompleteEmployeeAccount, IUserInfo } from '../models/interfaces/user.interfaces';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  isLoading = false;
  step = 1;
  email!: string;
  phone!: string;
  userInfo!: IUserInfo;
  completeEmployeeAccountInfo: ICompleteEmployeeAccount

  constructor() { }

  ngOnInit(): void {
  }

  onEmailFormSubmit(email) {
    console.log(email);
    this.email = email;
    this.step = 2;
  }
  onEmailVerifySubmit() {
    this.step = 3
  }
  onPhoneFormSubmit(phoneNumber) {
    console.log(phoneNumber);
    this.phone = phoneNumber;
    this.step = 4;
  }
  onPhoneVerifySubmit(Otp) {
    this.step = 5;
  }

  onUserInfoSubmit(userInfo: IUserInfo) {
    console.log(userInfo);
    this.userInfo = userInfo;
    this.step = 6;
  }

  onAddressSubmit(completeEmployeeInfo: ICompleteEmployeeAccount) {
    console.log(completeEmployeeInfo);
    this.completeEmployeeAccountInfo = completeEmployeeInfo;
    this.step = 7;
  }
}
