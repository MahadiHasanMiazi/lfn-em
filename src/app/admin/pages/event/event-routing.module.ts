import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./event-list/event-list.module").then((m) => m.EventListModule)
  },
  {
    path: "details",
    loadChildren: () => import("./event-details/event-details.module").then(m => m.EventDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
