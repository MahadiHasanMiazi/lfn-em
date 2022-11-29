import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "users",
  },
  {
    path: "event",
    loadChildren: () => import("./event/event.module").then((m) => m.EventModule),
  },
  {
    path: "company",
    loadChildren: () => import("./company/company.module").then((m) => m.CompanyModule),
  },
  {
    path: "employee",
    loadChildren: () => import("./employee/employee.module").then((m) => m.EmployeeModule),
  },
  {
    path: "vendor",
    loadChildren: () => import("./vendor/vendor.module").then((m) => m.VendorModule),
  },
  {
    path: "users",
    loadChildren: () => import("./user/user.module").then((m) => m.UserModule),
  },
  {
    path: "teams",
    loadChildren: () => import("./teams/teams.module").then((m) => m.TeamsModule),
  },
  {
    path: "dashboard",
    loadChildren: () => import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
  },
  {
    path: "contractor",
    loadChildren: () => import("./contractor/contractor.module").then((m) => m.ContractorModule),
  },
  {
    path: "broker",
    loadChildren: () => import("./broker/broker.module").then(m => m.BrokerModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
