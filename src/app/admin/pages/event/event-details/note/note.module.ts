import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoteRoutingModule } from './note-routing.module';
import { NoteComponent } from './note.component';
import { TableSearchFieldModule } from 'src/app/shared/table-search-field/table-search-field.module';
import { ListTableModule } from 'src/app/shared/list-table/list-table.module';
import { UserThumbNameModule } from 'src/app/shared/user-thumb-name/user-thumb-name.module';
import { TaskAssignedModule } from '../task-assigned/task-assigned.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NewNoteModule} from "./new-note/new-note.module";


@NgModule({
  declarations: [
    NoteComponent
  ],
  imports: [
    CommonModule,
    NoteRoutingModule,
    TableSearchFieldModule,
    ListTableModule,
    UserThumbNameModule,
    TaskAssignedModule,
    NgbModule,
    NewNoteModule
  ]
})
export class NoteModule { }
