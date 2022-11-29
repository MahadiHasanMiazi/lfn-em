import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageInvitationComponent } from './manage-invitation.component';

const routes: Routes = [
  {
    path: '',
    component: ManageInvitationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageInvitationRoutingModule { }
