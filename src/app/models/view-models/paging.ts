export interface IPaging {
  CurrentPage: number;
  PageCount: number;
  PageSize: number;
  TotalCount: number;
  Data: Array<any>;
}