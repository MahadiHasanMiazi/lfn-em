import { Component, OnInit } from '@angular/core';
import { IPaging } from 'src/app/models/view-models/paging';

@Component({
  selector: 'app-manage-invitation',
  templateUrl: './manage-invitation.component.html',
  styleUrls: ['./manage-invitation.component.scss']
})
export class ManageInvitationComponent implements OnInit {

  searchText = "Search event";
  paging: IPaging = {
    PageSize: 10,
    CurrentPage: 1,
    TotalCount: 100
  } as IPaging;
  userData = {
    ProPic: '',
    UserName: 'Theresa Webb'
  }

  constructor() { }

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
}
