import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailsComponent } from './event-details.component';

const routes: Routes = [
  {
    path: '',
    component: EventDetailsComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'manage-invitation',
        loadChildren: () => import('./manage-invitation/manage-invitation.module').then(m => m.ManageInvitationModule)
      },
      {
        path: 'vendor',
        loadChildren: () => import('./vendor/vendor.module').then(m => m.VendorModule)
      },
      {
        path: 'lfn-staff',
        loadChildren: () => import('./lfn-staff/lfn-staff.module').then(m => m.LfnStaffModule)
      },
      {
        path: 'manifest',
        loadChildren: () => import('./manifest/manifest.module').then(m => m.ManifestModule)
      },
      {
        path: 'note',
        loadChildren: () => import('./note/note.module').then(m => m.NoteModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventDetailsRoutingModule { }
