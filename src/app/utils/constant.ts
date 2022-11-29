import {CompanyType} from "../enum/company.enum";

export const userSearchDebounceTime = 1000;
export const successfullyAddItem = 'successfullyAddItem'

export const userRoles = {
  Standard: 'standard',
  Administrator: 'administrator',
  'Master Admin': 'masteradmin',
  Contractor: 'contractor'
}

export const organizationType = {
  Owner: CompanyType.Owner,
  Broker: CompanyType.Broker,
  Vendor: CompanyType.Vendor,
  Contractor: CompanyType.Contractor,
  Client: CompanyType.Client
}
