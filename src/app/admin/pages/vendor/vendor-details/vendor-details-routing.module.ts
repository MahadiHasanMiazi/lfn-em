import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorDetailsComponent } from './vendor-details.component';

const routes: Routes = [
  {
    path: '',
    component: VendorDetailsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'basic-info'
      },
      {
        path: 'basic-info',
        loadChildren: () => import('./basic-info/basic-info.module').then((m) => m.BasicInfoModule)
      },
      {
        path: 'events',
        loadChildren: () => import('./events/events.module').then((m) => m.EventsModule)
      },
      {
        path: 'address',
        loadChildren: () => import('./address/address.module').then((m) => m.AddressModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorDetailsRoutingModule { }
