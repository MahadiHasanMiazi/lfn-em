import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageSubscriptionComponent } from './manage-subscription.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ManageSubscriptionComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ManageSubscriptionComponent
  ]
})
export class ManageSubscriptionModule { }
