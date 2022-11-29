import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-invite-vendor',
  templateUrl: './invite-vendor.component.html',
  styleUrls: ['./invite-vendor.component.scss']
})
export class InviteVendorComponent implements OnInit {

  searchText = "Search event";
  showDetails = false;
  constructor(public _modal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  showSearchResult(event: string) {
    this.searchText = event;
    console.log('emitted: ', event);
    console.log('searchText: ', this.searchText);
  }
}
