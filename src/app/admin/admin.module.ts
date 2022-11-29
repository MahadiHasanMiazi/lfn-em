import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HeaderWrapperModule } from '../shared/headerWrapper/header-wrapper.module';
import { SidebarWrapperModule } from '../shared/sidebarWrapper/sidebar-wrapper.module';
import { FooterModule } from '../shared/footer/footer.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventCardComponent } from './components/event-card/event-card.component';
import {AlertService} from "../services/alert/alert.service";
import {AlertModule} from "../shared/alert/alert.module";



@NgModule({
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    EventCardComponent,
  ],
  exports: [
    EventCardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HeaderWrapperModule,
    SidebarWrapperModule,
    FooterModule,
    NgbModule,
    AlertModule
  ]
})
export class AdminModule { }
