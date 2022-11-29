import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManifestRoutingModule } from './manifest-routing.module';
import { ManifestComponent } from './manifest.component';
import { TableSearchFieldModule } from 'src/app/shared/table-search-field/table-search-field.module';
import { ListTableModule } from 'src/app/shared/list-table/list-table.module';
import { UserThumbNameModule } from 'src/app/shared/user-thumb-name/user-thumb-name.module';
import { TaskAssignedModule } from '../task-assigned/task-assigned.module';


@NgModule({
  declarations: [
    ManifestComponent
  ],
  imports: [
    CommonModule,
    ManifestRoutingModule,
    TableSearchFieldModule,
    ListTableModule,
    UserThumbNameModule,
    TaskAssignedModule
  ]
})
export class ManifestModule { }
