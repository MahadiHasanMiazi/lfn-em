import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'company-sidebar',
  templateUrl: './company-sidebar.component.html',
  styleUrls: ['./company-sidebar.component.scss']
})
export class CompanySidebarComponent implements OnInit {

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

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
