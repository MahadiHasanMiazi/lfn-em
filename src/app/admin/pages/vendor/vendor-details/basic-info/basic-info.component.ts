import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalOptions } from 'src/app/enum/modalOptions';
import { ManageSubscriptionComponent } from '../../manage-subscription/manage-subscription.component';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {

  editContact: boolean = false;
  isLoading: boolean = false;
  companyDetails: boolean = true;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.companyDetails = false;
    }, 1500);
  }

  onSubmit() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.editContact = false;
    }, 1500);
  }

  openManageSubscription() {
    this.modalService.open(ManageSubscriptionComponent, ModalOptions.lfnLg)
  }
}
