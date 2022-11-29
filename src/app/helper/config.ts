import { Status, UserRole } from "../enum/user";
import { IUserList, IUserParams } from "../models/interfaces/user.interfaces";
import { IOrganizationParams } from "../models/interfaces/organization.interfaces";

export const userRoleParser = (userRole) => {
  let roleName = "";
  if (userRole === UserRole.standard) {
    roleName = "Standard";
  } else if (userRole === UserRole.administrator) {
    roleName = "Administrator";
  } else if (userRole === UserRole.masteradmin) {
    roleName = "Master Admin";
  } else if (userRole === userRole.contractor) {
    roleName = "Contractor";
  }
  return roleName;
}

export const userStatus = (status) => {
  let userStatus = '';
  if (status == Status.Active) {
    userStatus = 'Active'
  } else if (status == Status.Inactive) {
    userStatus = 'Inactive'
  } else if (status == Status.Pending) {
    userStatus = 'Pending'
  }
  return userStatus;
}

export const statusColor = (status) => {
  let statusColor = ''
  if (status == Status.Active) {
    statusColor = 'btn-success-light text-success'
  } else if (status == Status.Pending) {
    statusColor = 'btn-secondary-light text-secondary'
  } else if (status == Status.Inactive) {
    statusColor = 'btn-info-light text-info'
  }
  return statusColor
}

export const makeFullName = (item: IUserList) => {
  const fistName = item.firstName ? item.firstName : '';
  const lastName = item.lastName ? item.lastName : '';
  return fistName + ' ' + lastName
}


