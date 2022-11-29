import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalOptions } from 'src/app/enum/modalOptions';
import { IPaging } from 'src/app/models/view-models/paging';
import { AddTeamComponent } from '../add-team/add-team.component';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent implements OnInit {

  searchText = 'test';
  paging: IPaging = {
    PageSize: 10,
    CurrentPage: 1,
    TotalCount: 40
  } as IPaging;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  pageChanged(ev: any) {
    console.log(ev);
  }

  showSearchResult(searchString) {
    console.log(searchString);
  }

  openEditTeam() {
    const editTeamModalRef = this.modalService.open(AddTeamComponent, ModalOptions.lfnLg);
    const editTeamModal = editTeamModalRef.componentInstance as AddTeamComponent;

    editTeamModal.isUpdate = true;

    editTeamModalRef.result.then(
      () => {
        console.log('closed 1');
      },
      () => {
        console.log('closed 2');
      }
    )
  }

}
