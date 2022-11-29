import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertModule } from '../shared/alert/alert.module';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), AlertModule],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
