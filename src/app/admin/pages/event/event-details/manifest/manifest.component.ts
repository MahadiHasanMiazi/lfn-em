import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalOptions } from 'src/app/enum/modalOptions';
import { IPaging } from 'src/app/models/view-models/paging';
import { TaskAssignedComponent } from '../task-assigned/task-assigned.component';

@Component({
  selector: 'app-manifest',
  templateUrl: './manifest.component.html',
  styleUrls: ['./manifest.component.scss']
})
export class ManifestComponent implements OnInit {

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

  openTaskAssigned() {
    this.modalService.open(TaskAssignedComponent, ModalOptions.lfnLg);
  }

}
