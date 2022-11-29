import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-invite-staff',
  templateUrl: './invite-staff.component.html',
  styleUrls: ['./invite-staff.component.scss']
})
export class InviteStaffComponent implements OnInit {
  searchText = "";
  showShiftDetails = false;
  inviteId;
  constructor(public _modal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  showSearchResult(event: string) {
    this.searchText = event;
    console.log('emitted: ', event);
    console.log('searchText: ', this.searchText);
  }
  inviteStaff() {
    setTimeout(() => {
      this.inviteId = 156456;
      this.showShiftDetails = true;
    }, 500);
  }
  closeShiftDetails(ev) {
    if (ev == true) {
      this.showShiftDetails = false;
    }
  }
}
