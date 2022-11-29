import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EmployeeApiEndPoint } from 'src/app/helper/api-url.config';
import { IAddEmployee, ICompleteEmployeeAccount, IUserInfo, IUserParams } from 'src/app/models/interfaces/user.interfaces';
import { AlertService } from "../alert/alert.service";
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { Messages } from 'src/app/utils/messages';
import { BaseResponse } from 'src/app/models/interfaces/base-response';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  headers = new HttpHeaders({
    'content-type': 'application/x-www-form-urlencoded',
    Accept: '*/*',
  });
  options = {
    headers: this.headers,
  };

  userInfo = new BehaviorSubject<any>({});
  user = new Subject<any>();

  constructor(
    private readonly http: HttpClient,
    private readonly alertService: AlertService
  ) { }

  addNewUser(body: any) {
    return this.addUser(body).subscribe({
      next: () => {
        this.alertService.success(Messages.EMPLOYEE_ADDED_SUCCESSFULLY);
      },
      error: (error: any) => {
        error.error.errors[0].message.forEach((message: any) => {
          this.alertService.error(message);
        });
      },
    });
  }

  addUser(payload: IAddEmployee) {
    const body = {
      BusinessEmail: payload.email,
      Roles: [payload.userRole],
      OrganizationId: payload.organizationId,
    };
    return this.http.post(
      environment.BASE_URL + EmployeeApiEndPoint.addEmployee,
      body
    )
  }

  getAllUser(params: IUserParams) {
    return this.http.get(
      environment.BASE_URL + EmployeeApiEndPoint.getAllUsers(params)
    );
  }

  completeAccount(payload: ICompleteEmployeeAccount) {
    return this.http.post(
      environment.BASE_URL + EmployeeApiEndPoint.completeUser,
      payload
    );
  }

  getUserByEmail(email: string) {
    return this.http.get<BaseResponse<IUserInfo>>(
      environment.BASE_URL + EmployeeApiEndPoint.getUserByEmail(email)
    );
  }

  // getContractorForAOrganization(params: any) {
  //   return this.http.get(environment.BASE_URL + EmployeeApiEndPoint.getContractorByAOrganization(params))
  // }

  getUserByUserId(userId: string) {
    return this.http.get(
      environment.BASE_URL + EmployeeApiEndPoint.getUserByUserId(userId)
    );
  }

  storeUserInfo(data: any) {
    this.userInfo.next(data);
  }
  getUserInfo(): Observable<any> {
    return this.userInfo.asObservable();
  }

  getUserList(): Observable<any> {
    return this.user.asObservable();
  }
  // setUserOnList(user: any){
  //   this.user.next(user);
  // }
}
