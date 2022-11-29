import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AlertService } from "../alert/alert.service";
import { environment } from "../../../environments/environment";
import { OrganizationApiEndpoint } from "../../helper/api-url.config";
import { BaseResponse, IQueryParams } from "../../models/interfaces/base-response";
import { IOrganizationList, IOrganizationParams } from "../../models/interfaces/organization.interfaces";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  headers = new HttpHeaders({
    'content-type': 'application/x-www-form-urlencoded',
    Accept: '*/*',
  });
  options = {
    headers: this.headers,
  };

  constructor(private readonly http: HttpClient,
    private readonly alertService: AlertService) { }

  createOrganization(payload) {
    return this.http.post(environment.BASE_URL +
      OrganizationApiEndpoint.addOrganization, payload)
  }

  getOrganizationList(params: IOrganizationParams) {
    return this.http.get<BaseResponse<any>>(environment.BASE_URL +
      OrganizationApiEndpoint.getOrganization(params))
  }

  getDesignations(params: IQueryParams) {
    return this.http.get<BaseResponse<any>>(
      environment.BASE_URL + OrganizationApiEndpoint.designationList(params)
    )
  }

}
