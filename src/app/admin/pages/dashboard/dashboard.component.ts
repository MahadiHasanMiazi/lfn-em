import { Component, OnInit } from '@angular/core';
import {IPaging} from "../../../models/view-models/paging";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  latLong = [
    { lat: 23.7461, lng: 90.3742 },
    {lat: 23.6461, lng: 90.2742},
    {lat: 23.4461, lng: 90.4}
  ]
  testEventCard = {
    className: 'test-event-card',
    count: 30,
    color: '#FAB400',
    description: 'Test Event'
  };
  futureEvent = {
    className: "future-event",
    count: 10,
    color: '#4384F3',
    description: 'Future Event'
  };
  pendingEvent = {
    className: "pending-event",
    count: 21,
    color: '#6C00C1',
    description: 'Pending Event'
  };
  healthFairCard = {
    className: 'health-fair-card',
    count: 85,
    color: '#44B4DB',
    description: 'Health Fair'
  }

  searchText: string;
  searchLocation: string;
  paging: IPaging = {
    PageSize: 10,
    CurrentPage: 1,
    TotalCount: 40
  } as IPaging;
  userData = {
    ProPic: '',
    UserName: ''
  }
  isViewMap = false;


  constructor() { }

  ngOnInit(): void {
  }

  showSearchResult(event: string) {
    this.searchText = event;
  }

  showSearchLocation(event: string) {
    this.searchLocation = event;
  }
  pageChanged(ev: any) {
    console.log(ev);
  }

}
