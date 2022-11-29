import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalOptions } from "src/app/enum/modalOptions";
import { IPaging } from "src/app/models/view-models/paging";
import { AddCompanyComponent } from "../add-company/add-company.component";
import { UserService } from "../../../../services/common-service/user.service";
import { OrganizationService } from "../../../../services/common-service/organization.service";
import { IOrganizationList, IOrganizationParams } from "../../../../models/interfaces/organization.interfaces";
import { CompanyType } from "../../../../enum/company.enum";
import { userStatus, statusColor } from "../../../../helper/config";
import { successfullyAddItem } from "../../../../utils/constant";

@Component({
  selector: "app-company-list",
  templateUrl: "./company-list.component.html",
  styleUrls: ["./company-list.component.scss"],
})
export class CompanyListComponent implements OnInit {
  isLoaded: boolean = false;
  searchText: string = "";
  sourceId = ''
  filterKey = ''
  userData = {
    ProPic: "",
    UserName: "CocaCola",
  };

  paging: IPaging = {
    PageSize: 10,
    CurrentPage: 1,
    TotalCount: 40,
  } as IPaging;

  organizationId = "";
  organizationList: IOrganizationList[];
  isDataLoaded = false;

  constructor(
    public modalService: NgbModal,
    private router: Router,
    private readonly userService: UserService,
    private readonly organizationService: OrganizationService
  ) { }

  ngOnInit(): void {
    this.getOrganizationInformation();
    this.getCompanyList();
  }
  getOrganizationInformation() {
    this.userService.userInfo.subscribe((data) => {
      this.organizationId = data.organizationId;
    });
  }

  getCompanyList() {
    this.isDataLoaded = false;
    const params: IOrganizationParams = {
      operationType: CompanyType.Client,
      pageIndex: this.paging.CurrentPage,
      pageSize: 10,
      sourceId: this.sourceId,
      orderBy: this.filterKey,
      openText: this.searchText
    };

    this.organizationService.getOrganizationList(params).subscribe({
      next: (response) => {
        this.organizationList = response.payload.items;
        this.paging.TotalCount = response.payload.totalResults;
        this.isDataLoaded = true;
      },
      error: (error) => {
        console.log("error", error);
      },
    });
  }

  showSearchResult(event: string) {
    this.searchText = event;
    this.getCompanyList()
  }

  pageChanged(ev: any) {
    this.paging.CurrentPage = ev;
    this.getCompanyList();
  }

  openAddCompany() {
    const modalRef = this.modalService.open(AddCompanyComponent, ModalOptions.lfnLg);
    modalRef.componentInstance.organizationId = this.organizationId;
    modalRef.result.then((result) => {
      if (result === successfullyAddItem) {
        setTimeout(() => {
          this.getCompanyList();
        }, 10000);
      }
    });
  }

  goToCompanyDetails() {
    this.router.navigateByUrl("/admin/company/details");
  }
  status(status: any) {
    return userStatus(status);
  }

  statusColor(status) {
    return statusColor(status);
  }
}
