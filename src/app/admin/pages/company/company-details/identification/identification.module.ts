import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentificationRoutingModule } from './identification-routing.module';
import { IdentificationComponent } from './identification.component';


@NgModule({
  declarations: [
    IdentificationComponent
  ],
  imports: [
    CommonModule,
    IdentificationRoutingModule,
  ]
})
export class IdentificationModule { }
