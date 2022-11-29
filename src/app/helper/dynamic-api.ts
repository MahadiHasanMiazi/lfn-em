import { IQueryParams } from "../models/interfaces/base-response";
import { IOrganizationParams } from "../models/interfaces/organization.interfaces";
import { IUserParams } from "../models/interfaces/user.interfaces";

export const dynamicUserListApi = (params: IUserParams) => {
  let paramsDictionary = {
    PageIndex: params.pageIndex,
    PageSize: params.pageSize,
    OrderBy: params.orderBy
  }
  if (params.isAscending)
    paramsDictionary['IsAscending'] = params.isAscending
  if (params.openText)
    paramsDictionary['OpenText'] = params.openText
  if (params.userRole)
    paramsDictionary['Role'] = params.userRole
  if (params.organizationId)
    paramsDictionary['OrganizationId'] = params.organizationId
  let api = 'api/organizationmanagementquery/EmployeeQuery/get-all?'
  for (let key in paramsDictionary) {
    api = api.concat(key + '=' + paramsDictionary[key], '&')
  }
  api = api.slice(0, api.length - 1)
  return api;
}

export const dynamicOrganizationListApi = (params: IOrganizationParams) => {
  let paramsDictionary = {
    pageIndex: params.pageIndex,
    pageSize: params.pageSize,
  }
  if (params.operationType) {
    paramsDictionary['operationType'] = params.operationType
  }
  if (params.openText) {
    paramsDictionary['openText'] = params.openText
  }
  if (params.orderBy) {
    paramsDictionary['orderBy'] = params.orderBy
  }
  if (params.sourceId) {
    paramsDictionary['sourceId'] = params.sourceId
  }
  let api = 'api/organizationmanagementquery/OrganizationQuery/get-all?'
  for (let key in paramsDictionary) {
    api = api.concat(key + '=' + paramsDictionary[key], '&')
  }
  api = api.slice(0, api.length - 1)
  return api
}

export const dynamicDesignationListApi = (params: IQueryParams) => {
  let paramsDictionary = {};
  if (params.openText) {
    paramsDictionary['openText'] = params.openText
  }
  if (params.orderBy) {
    paramsDictionary['orderBy'] = params.orderBy
  }
  if (params.pageIndex) {
    paramsDictionary['pageIndex'] = params.pageIndex
  }
  if (params.pageSize) {
    paramsDictionary['pageSize'] = params.pageSize
  }
  if (params.organizationId) {
    paramsDictionary['organizationId'] = params.organizationId
  }
  if (params.operationType) {
    paramsDictionary['operationType'] = params.operationType
  }
  let api = 'api/organizationmanagementquery/Designation/get-by-org-id?';
  for (let key in paramsDictionary) {
    api = api.concat(key + '=' + paramsDictionary[key], '&')
  }
  api = api.slice(0, api.length - 1)
  return api
}
