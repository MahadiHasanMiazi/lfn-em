import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AlertService } from "src/app/services/alert/alert.service";
import { CompanyType } from "../../../../enum/company.enum";
import { ModalOptions } from "../../../../enum/modalOptions";
import { statusColor, userStatus } from "../../../../helper/config";
import { IOrganizationList, IOrganizationParams } from "../../../../models/interfaces/organization.interfaces";
import { IPaging } from "../../../../models/view-models/paging";
import { OrganizationService } from "../../../../services/common-service/organization.service";
import { UserService } from "../../../../services/common-service/user.service";
import { BrokerAddComponent } from "../broker-add/broker-add.component";

@Component({
  selector: "app-broker-list",
  templateUrl: "./broker-list.component.html",
  styleUrls: ["./broker-list.component.scss"],
})
export class BrokerListComponent implements OnInit {
  searchText = "";
  paging: IPaging = {
    PageSize: 10,
    CurrentPage: 1,
    TotalCount: 40,
  } as IPaging;
  private organizationId: any;
  isDataLoaded: boolean = false;
  organizationList: IOrganizationList[];
  isLoading = false;

  constructor(
    private modalService: NgbModal,
    private userService: UserService,
    private organizationService: OrganizationService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.getOrganizationInformation();
    this.getBrokerList();
  }

  openModal() {
    if (this.organizationId != undefined) {
      const modalRef = this.modalService.open(BrokerAddComponent, ModalOptions.lfnLg);
      modalRef.componentInstance.organizationId = this.organizationId;
      modalRef.result.then((result) => {
        if (result) {
          setTimeout(() => {
            this.getBrokerList();
          }, 1000);
        }
      });
    }
  }

  pageChanged($page: any) {
    this.paging.CurrentPage = $page;
    this.getBrokerList();
  }

  showSearchResult(event: string) {
    this.searchText = event;
    this.getBrokerList();
  }

  private getOrganizationInformation() {
    this.userService.userInfo.subscribe((data) => {
      this.organizationId = data.organizationId;
    });
  }

  private getBrokerList() {
    this.isDataLoaded = false;
    const params: IOrganizationParams = {
      operationType: CompanyType.Broker,
      pageIndex: this.paging.CurrentPage,
      pageSize: 10,
      openText: this.searchText,
    };

    this.organizationService.getOrganizationList(params).subscribe({
      next: (response) => {
        this.organizationList = response.payload.items;
        this.paging.TotalCount = response.payload.totalResults;
        this.isDataLoaded = true;
      },
      error: (error) => {
        console.log("error", error);
        this.alertService.error("Something went wrong");
      },
    });
  }

  status(status: any) {
    return userStatus(status);
  }

  statusColor(status: any) {
    return statusColor(status);
  }
}
