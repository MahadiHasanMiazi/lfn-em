import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InnerSidebarComponent } from './inner-sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    InnerSidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    InnerSidebarComponent
  ]
})
export class InnerSidebarModule { }
