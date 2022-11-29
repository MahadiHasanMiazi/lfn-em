import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./team-list/team-list.module').then((m) => m.TeamListModule)
  },
  {
    path: "details",
    loadChildren: () => import('./team-details/team-details.module').then((m) => m.TeamDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
