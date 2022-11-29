import { IUserParams } from '../models/interfaces/user.interfaces';
import { dynamicDesignationListApi, dynamicOrganizationListApi, dynamicUserListApi } from './dynamic-api';
import { IOrganizationParams } from "../models/interfaces/organization.interfaces";
import { IQueryParams } from '../models/interfaces/base-response';

export class AuthApiEndPoint {
  public static identity = "api/identity/identity/token";
  static emailTwoFa = "api/2fa/TwoFactorAuthentication/email";
  static phoneTwoFa = "api/2fa/TwoFactorAuthentication/phone";
  static verifyOtp = "api/2fa/TwoFactorAuthentication/verified-code";
  static sentForgotPasswordOtp = (payload: any) => "api/uam/SecurityCommand/TwoFactorAuthentication?UserName=" + payload.email;
  static resetPassword = "api/uam/SecurityCommand/ResetPassword";
  static acknowledge = "api/uam/SecurityCommand/accept-acknowledgment-condition";
  static logout = "api/identity/identity/authentication/logout";
}
export class TwoFactorAuthApiEndpoint {
  static emailTwoFa = "api/2fa/TwoFactorAuthentication/email";
  static phoneTwoFa = "api/2fa/TwoFactorAuthentication/phone";
  static verifyOTP = "api/2fa/TwoFactorAuthentication/verified-code";
  static isVerified = "api/2fa/TwoFactorAuthentication/is-verified";
  static completeTwoFa = "api/2fa/TwoFactorAuthentication/complete-verification";
  static emailOrPhone = "api/uam/SecurityCommand/TwoFactorAuthentication";
  static verifyUAM2FACode = "api/uam/SecurityCommand/two-fa-verify";
}

export class EmployeeApiEndPoint {
  static getEmployeeDetailsByEmail = "api/organizationmanagementquery/EmployeeQuery/get-by-email-or-phone";
  static addEmployee = "api/organizationmanagement/Employee/create";
  static getAllUsers = (params: IUserParams) => dynamicUserListApi(params);
  static completeUser = 'api/organizationmanagement/Employee/complete-account';
  static getUserByEmail = (email) => `api/organizationmanagementquery/EmployeeQuery/get-by-email-or-phone?EmailOrPhone=${email}`
  // static getContractorByAOrganization = (params: IUserParams) => dynamicUserListApi(params);
  static getUserByUserId = (userId) => `api/organizationmanagement/EmployeeQuery/get/${userId}`
}

export class OrganizationApiEndpoint {
  static addOrganization = 'api/organizationmanagement/Organization/create'
  static getOrganization = (params: IOrganizationParams) => dynamicOrganizationListApi(params)
  static uploadContent = 'api/contentmanagerservice/Command/uploadcontent';
  static designationList = (params: IQueryParams) => dynamicDesignationListApi(params)
}
