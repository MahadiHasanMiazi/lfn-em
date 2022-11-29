import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalOptions } from 'src/app/enum/modalOptions';
import { IPaging } from 'src/app/models/view-models/paging';
import { InviteVendorComponent } from '../invite-vendor/invite-vendor.component';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {

  searchText = "Search event";
  paging: IPaging = {
    PageSize: 10,
    CurrentPage: 1,
    TotalCount: 100
  } as IPaging;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  showSearchResult(event: string) {
    this.searchText = event;
    console.log('emitted: ', event);
    console.log('searchText: ', this.searchText);
  }
  pageChanged(ev: any) {
    console.log(ev);
  }

  openInviteVendor() {
    this.modalService.open(InviteVendorComponent, ModalOptions.lfnLg)
  }

}
