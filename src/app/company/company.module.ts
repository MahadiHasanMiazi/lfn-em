import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { HeaderWrapperModule } from '../shared/headerWrapper/header-wrapper.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarWrapperModule } from '../shared/sidebarWrapper/sidebar-wrapper.module';
import { CompanyHeaderComponent } from './components/company-header/company-header.component';
import { CompanySidebarComponent } from './components/company-sidebar/company-sidebar.component';
import { FooterModule } from '../shared/footer/footer.module';


@NgModule({
  declarations: [
    CompanyComponent,
    CompanyHeaderComponent,
    CompanySidebarComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    HeaderWrapperModule,
    SidebarWrapperModule,
    FooterModule,
    NgbModule
  ]
})
export class CompanyModule { }
