import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskAssignedComponent } from './task-assigned.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TaskAssignedComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TaskAssignedComponent
  ]
})
export class TaskAssignedModule { }
