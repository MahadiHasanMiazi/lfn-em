import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTeamComponent } from './add-team.component';
import { RouterModule } from '@angular/router';
import { BtnLoaderModule } from 'src/app/shared/btn-loader/btn-loader.module';



@NgModule({
  declarations: [
    AddTeamComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BtnLoaderModule
  ],
  exports: [
    AddTeamComponent
  ]
})
export class AddTeamModule { }
