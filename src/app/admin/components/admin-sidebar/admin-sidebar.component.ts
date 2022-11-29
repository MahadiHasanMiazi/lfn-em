import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit {

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

  constructor(public router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        const url = this.router.url;
        if (url == '/admin/users' || url == '/admin/teams') {
          this.userManagementActive = true;
        }
      }
    })
  }

  ngOnInit(): void {
  }

}
