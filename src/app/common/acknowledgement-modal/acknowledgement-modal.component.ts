import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-acknowledgement-modal',
  templateUrl: './acknowledgement-modal.component.html',
  styleUrls: ['./acknowledgement-modal.component.scss']
})
export class AcknowledgementModalComponent implements OnInit {

  isLoading: boolean = false;

  constructor(public _modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
