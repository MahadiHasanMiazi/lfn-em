import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalOptions } from 'src/app/enum/modalOptions';
import { IPaging } from 'src/app/models/view-models/paging';
import { AddEventComponent } from '../add-event/add-event.component';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  isLoaded: boolean = false;

  searchText: string = "test";

  paging: IPaging = {
    PageSize: 10,
    CurrentPage: 1,
    TotalCount: 100
  } as IPaging;

  constructor(private modalService: NgbModal, private router: Router) { }

  ngOnInit(): void {
    console.log(this.searchText);
  }

  showSearchResult(event: string) {
    this.searchText = event;
    console.log('emitted: ', event);
    console.log('searchText: ', this.searchText);
  }

  pageChanged(ev: any) {
    console.log(ev);
  }

  openAddEvent() {
    this.modalService.open(AddEventComponent, ModalOptions.lfnLg)
  }

  gotoEventDetails() {
    this.router.navigate(['admin/event/details']);
  }
}
