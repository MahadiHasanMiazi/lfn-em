import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewNoteComponent } from './new-note.component';



@NgModule({
  declarations: [
    NewNoteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NewNoteComponent
  ]
})
export class NewNoteModule { }
