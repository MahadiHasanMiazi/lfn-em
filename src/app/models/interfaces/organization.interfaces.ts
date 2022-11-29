import { CompanyType } from "../../enum/company.enum";

export interface IOrganizationList {
  acknowledgementAcceptDate: string;
  address: string;
  businessEmail: string
  city: string
  companyEmail: string
  contactPersons: string
  coverPhoto: any
  coverUrl: string
  departments: string
  district: string
  isAcceptTermsAndCondition: boolean
  isAcknowledgementAccept: boolean
  isEmailVerified: boolean
  itemId: string
  latitude: any
  location: string
  logo: any
  logoUrl: string
  longitude: any
  name: string
  numberofstaff: string
  operationType: any
  phoneNumber: string
  socialID: string
  sourceId: string
  status: any
  termsAndConditionAcceptDate: string
  type: any
  uidNo: any
  website: string
}

export interface IOrganizationParams {
  operationType?: CompanyType
  pageIndex: number
  pageSize: number,
  orderBy?: string,
  openText?: string,
  sourceId?: string,
}
