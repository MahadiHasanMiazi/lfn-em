import { Component, OnInit } from '@angular/core';
import { IPaging } from 'src/app/models/view-models/paging';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  searchText: String = '';


  paging: IPaging = {
    PageSize: 10,
    CurrentPage: 1,
    TotalCount: 40
  } as IPaging;

  constructor() { }

  ngOnInit(): void {
  }

  pageChanged(event: Event) {
    console.log(event);
  }

  showSearchResult(event: Event) {
    console.log(event);
  }

}
