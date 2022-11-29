import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalOptions } from 'src/app/enum/modalOptions';
import { IPaging } from 'src/app/models/view-models/paging';
import { AddUserComponent } from '../add-user/add-user.component';
import { UserService } from "../../../../services/common-service/user.service";
import { IUserList, IUserParams } from "../../../../models/interfaces/user.interfaces";
import { makeFullName, statusColor, userStatus } from "../../../../helper/config";
import { userRoles } from 'src/app/utils/constant';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  isLoaded: boolean = false;
  searchText: string = "";
  userData = {
    ProPic: '',
    UserName: 'annette_black'
  }
  paging: IPaging = {
    PageSize: 10,
    CurrentPage: 1,
    TotalCount: 40
  } as IPaging;


  userList: IUserList[];
  paginateUserData: IUserList[]
  organizationId: string;

  userRolesDictionary = userRoles
  selectedRole = '';

  constructor(private modalService: NgbModal,
    private readonly userService: UserService) { }

  ngOnInit(): void {
    this.getUserList(this.paging.CurrentPage);
    this.getUserInformation();
  }

  statusColor(status) {
    return statusColor(status)
  }

  getUserInformation() {
    this.userService.userInfo.subscribe(data => {
      this.organizationId = data.organizationId;
    });
  }

  getUserList(pageIndex: number) {
    this.isLoaded = false;
    const params: IUserParams = {
      pageIndex: pageIndex,
      pageSize: 10,
      orderBy: 'FirstName',
      // isAscending: true
      openText: this.searchText,
      userRole: this.selectedRole
    }
    this.userService.getAllUser(params)
      .subscribe({
        next: (response: any) => {
          this.userList = response.payload.items
          this.isLoaded = true;
          this.paging.TotalCount = response.payload.totalResults;
        },
        error: (error: any) => {
          console.log('error', error)
        }
      })
  }

  showSearchResult(event: string) {
    this.searchText = event;
    // if(event.length > 2 || event.length === 0){
    this.getUserList(0);
    // }
  }

  pageChanged(ev: any) {
    this.paging.CurrentPage = ev
    this.getUserList(ev);
  }

  openAddUserModal() {
    const modalRef = this.modalService.open(AddUserComponent, ModalOptions.lfnLg);
    modalRef.componentInstance.organizationId = this.organizationId;
    modalRef.result.then(
      (result) => {
        if (result == 'userAddedSuccessfully') {
          this.getUserList(this.paging.CurrentPage);
        }
      }
    );
  }

  filterByUserRole(event) {
    this.selectedRole = event.target.value;
    this.getUserList(0)
  }

  status(status: any) {
    return userStatus(status)
  }

  fullName(item: IUserList) {
    return makeFullName(item)
  }
}
