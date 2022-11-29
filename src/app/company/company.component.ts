import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../services/common-service/sidebar.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  sidebarCollapse: boolean = true;

  constructor(private sidebar: SidebarService) {
    this.sidebar.isSidebarCollapsed.subscribe((collapseState) => this.sidebarCollapse = collapseState);
  }

  ngOnInit(): void {
  }

}
