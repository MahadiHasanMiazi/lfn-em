import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicInfoRoutingModule } from './basic-info-routing.module';
import { BasicInfoComponent } from './basic-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ManageSubscriptionModule } from '../../manage-subscription/manage-subscription.module';


@NgModule({
  declarations: [
    BasicInfoComponent
  ],
  imports: [
    CommonModule,
    BasicInfoRoutingModule,
    ManageSubscriptionModule,
    NgbModule
  ]
})
export class BasicInfoModule { }
