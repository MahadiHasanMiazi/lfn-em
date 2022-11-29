import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-manage-subscription',
  templateUrl: './manage-subscription.component.html',
  styleUrls: ['./manage-subscription.component.scss']
})
export class ManageSubscriptionComponent implements OnInit {

  addPaymentMethod: boolean = false;

  constructor(public _modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
