export interface BaseResponse<PayloadType> {
  errors: any;
  message: any;
  payload: PayloadType;
  isValidFailed: boolean;
  requestUri: null;
  externalError: null;
  httpStatusCode: number;
}

export interface IQueryParams {
  operationType?: any,
  pageIndex?: number
  pageSize?: number,
  orderBy?: string,
  openText?: string,
  organizationId?: string
}