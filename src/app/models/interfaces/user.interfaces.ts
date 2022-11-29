export interface IAddEmployee {
  email: string;
  userRole: string;
  organizationId: string;
}

export interface IUserParams {
  pageIndex: number,
  pageSize: number,
  orderBy: string,
  isAscending?: boolean
  organizationId?: string,
  userRole?: any,
  openText?: string,
  role?: string
}

export interface IUserList {
  address: string;
  businessEmail: string;
  dateOfBirth: string;
  department: string;
  designation: string;
  employeeStatus: number;
  firstName: string;
  gender: number;
  insuranceCertificate: any;
  insuranceCertificateUrl: string;
  isContactPerson: boolean;
  itemId: string;
  lastName: string;
  organizationId: string;
  organizationView: any;
  personalEmail: string;
  phone: string;
  roles: any;
}
export interface IUserInfo {
  insuranceCertificateUrl: string;
  itemId: string;
  organizationView: null;
  firstName: string;
  lastName: string;
  designationIds: [];
  phone: string;
  personalEmail: string;
  businessEmail: string;
  roles: null;
  dateOfBirth: null;
  address: null;
  employeeStatus: number;
  department: null;
  organizationId: string;
  isContactPerson: boolean;
  gender: number;
  insuranceCertificate: null;
  isAcceptAcknowledgment?: boolean;
  isUserCreated?: boolean;
  designations?: null;
  isEmailVerified?: boolean;
  isAcceptTermsAndCondition?: boolean;
  password?: string
}
export interface ICompleteEmployeeAccount {
  ItemId: string;
  FirstName: string;
  LastName: string;
  DesignationIds: string[];
  Phone: string;
  PersonalEmail: string;
  BusinessEmail: string;
  Gender: number;
  password?: string;
  IsAcceptAcknowledgment: boolean;
  IsAcceptTermsAndCondition: boolean;
  DateOfBirth: string;
  Address: string;
  isAcceptAcknowledgment: boolean
}
