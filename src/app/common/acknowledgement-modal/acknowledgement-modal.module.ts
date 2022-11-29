import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcknowledgementModalComponent } from './acknowledgement-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AcknowledgementModalComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [AcknowledgementModalComponent]
})
export class AcknowledgementModalModule { }
