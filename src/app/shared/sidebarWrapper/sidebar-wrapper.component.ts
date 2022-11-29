import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { Subject } from "rxjs";
import { SidebarService } from "src/app/services/common-service/sidebar.service";

@Component({
  selector: "sidebar-wrapper",
  templateUrl: "./sidebar-wrapper.component.html",
  styleUrls: ["./sidebar-wrapper.component.scss"],
})
export class SidebarWrapperComponent implements OnInit {

  sidebarCollapse: boolean = true;
  showAccSubmenu: boolean = false;
  showEventSubmenu: boolean = false;
  showReportSubmenu: boolean = false;
  showUsersSubMenu: boolean = false;
  accountSetupActive: boolean = false;
  reportsActive: boolean = false;
  userManagementActive: boolean = false;
  showProvidersSubMenu: boolean = false;
  providersActive: boolean = false;
  showBillingsSubMenu: boolean = false;
  billingsActive: boolean = false;

  constructor(public router: Router, public sidebar: SidebarService) {
    this.sidebar.isSidebarCollapsed.subscribe((collapseState) => this.sidebarCollapse = collapseState)
  }

  ngOnInit(): void { }

  sidebarCollapsed(value: boolean) {
    this.sidebar.collapse(value);
  }
}
