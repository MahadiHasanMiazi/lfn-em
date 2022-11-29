import { Component, OnInit } from "@angular/core";
import { IPaging } from "../../../../models/view-models/paging";
import { Router } from "@angular/router";
import { AddContractorComponent } from "../add-contractor/add-contractor.component";
import { ModalOptions } from "../../../../enum/modalOptions";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { makeFullName, userStatus } from "../../../../helper/config";
import { UserService } from "../../../../services/common-service/user.service";
import { IUserList, IUserParams } from "../../../../models/interfaces/user.interfaces";
import { statusColor } from "../../../../helper/config";

@Component({
  selector: "app-contractor-list",
  templateUrl: "./contractor-list.component.html",
  styleUrls: ["./contractor-list.component.scss"],
})
export class ContractorListComponent implements OnInit {
  organizationId: string;

  isLoaded = false;
  searchText: string = "";
  paging: IPaging = {
    PageSize: 10,
    CurrentPage: 1,
    TotalCount: 40,
  } as IPaging;

  userData = {
    ProPic: "",
    UserName: "CocaCola",
  };
  contractorList: IUserList[];

  constructor(private router: Router, private modalService: NgbModal, private readonly userService: UserService) { }

  ngOnInit(): void {
    this.getUserInformation();
    this.getContractorForAOrganization(0);
  }

  getUserInformation() {
    this.userService.userInfo.subscribe((data) => {
      this.organizationId = data.organizationId;
    });
  }

  statusColor(status) {
    return statusColor(status);
  }

  getContractorForAOrganization(pageIndex: number) {
    const params: IUserParams = {
      pageIndex: pageIndex,
      pageSize: 10,
      orderBy: "FirstName",
      // isAscending: true,
      organizationId: this.organizationId,
      userRole: "contractor",
      openText: this.searchText,
    };
    this.isLoaded = false;
    this.userService.getAllUser(params).subscribe({
      next: (response: any) => {
        this.contractorList = response.payload.items;
        this.isLoaded = true;
        this.paging.TotalCount = response.payload.totalResults;
      },
      error: (error: any) => {
        console.log("error", error);
      },
    });
  }

  showSearchResult(event: string) {
    this.searchText = event;
    if (event.length > 2 || event.length === 0) {
      this.getContractorForAOrganization(0);
    }
  }

  pageChanged(ev: any) {
    this.paging.CurrentPage = ev;
    this.getContractorForAOrganization(ev);
  }

  openAddUserModal() {
    const modalRef = this.modalService.open(AddContractorComponent, ModalOptions.lfnLg);
    modalRef.componentInstance.organizationId = this.organizationId;
    modalRef.result.then((result) => {
      if (result == "userAddedSuccessfully") {
        this.getContractorForAOrganization(this.paging.CurrentPage);
      }
    });
  }

  status(status: any) {
    return userStatus(status);
  }

  fullName(item: IUserList) {
    return makeFullName(item);
  }
}
