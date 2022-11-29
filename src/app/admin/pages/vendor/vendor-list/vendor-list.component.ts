import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CompanyType } from "src/app/enum/company.enum";
import { ModalOptions } from "src/app/enum/modalOptions";
import { statusColor, userStatus } from "src/app/helper/config";
import { IOrganizationList, IOrganizationParams } from "src/app/models/interfaces/organization.interfaces";
import { IPaging } from "src/app/models/view-models/paging";
import { OrganizationService } from "src/app/services/common-service/organization.service";
import { UserService } from "src/app/services/common-service/user.service";
import { AddVendorComponent } from "../add-vendor/add-vendor.component";

@Component({
  selector: "app-vendor-list",
  templateUrl: "./vendor-list.component.html",
  styleUrls: ["./vendor-list.component.scss"],
})
export class VendorListComponent implements OnInit {
  searchText: string = "";
  userData = {
    ProPic: "",
    UserName: "CocaCola",
  };
  paging: IPaging = {
    PageSize: 10,
    CurrentPage: 1,
    TotalCount: 40,
  } as IPaging;

  organizationId: string;
  isDataLoaded: boolean = false;
  organizationList: IOrganizationList[];

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private userService: UserService,
    private organizationService: OrganizationService
  ) { }

  ngOnInit(): void {
    this.getOrganizationInformation();
    this.getVendorList();
  }

  getOrganizationInformation() {
    this.userService.userInfo.subscribe((data) => {
      this.organizationId = data.organizationId;
    });
  }

  getVendorList() {
    this.isDataLoaded = false;
    const params: IOrganizationParams = {
      operationType: CompanyType.Vendor,
      pageIndex: this.paging.CurrentPage,
      pageSize: 10,
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

  showSearchResult(ev: Event) {
    console.log(ev);
  }

  pageChanged(ev: any) {
    this.paging.CurrentPage = ev;
    this.getVendorList();
  }

  openAddVendor() {
    if (this.organizationId != undefined) {
      const addVendorModalRef = this.modalService.open(AddVendorComponent, ModalOptions.lfnLg);
      addVendorModalRef.componentInstance.organizationId = this.organizationId;
      addVendorModalRef.result.then((result) => {
        if (result === "vendorAddedSuccessfully") {
          this.getOrganizationInformation();
        }
      });
    }
  }

  goToVendorDetails() {
    this.router.navigateByUrl("/admin/vendor/details");
  }

  status(status: any) {
    return userStatus(status);
  }

  statusColor(status) {
    return statusColor(status);
  }
}
