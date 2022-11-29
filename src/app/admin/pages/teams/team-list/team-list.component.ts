import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalOptions } from 'src/app/enum/modalOptions';
import { IPaging } from 'src/app/models/view-models/paging';
import { AddTeamComponent } from '../add-team/add-team.component';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  searchText: string = "test";
  paging: IPaging = {
    PageSize: 10,
    CurrentPage: 1,
    TotalCount: 40
  } as IPaging;

  constructor(private modalService: NgbModal, private router: Router) { }

  ngOnInit(): void {
  }

  showSearchResult(event: string) {
    this.searchText = event;
  }

  pageChanged(ev: any) {
    console.log(ev);
  }

  openAddTeam() {
    this.modalService.open(AddTeamComponent, ModalOptions.lfnLg)
  }

  goToTeamDetails() {
    this.router.navigateByUrl('/admin/teams/details');
  }

}
