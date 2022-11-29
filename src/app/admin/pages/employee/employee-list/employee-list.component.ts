import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalOptions } from 'src/app/enum/modalOptions';
import { IPaging } from 'src/app/models/view-models/paging';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  searchText: string = "test";
  paging: IPaging = {
    PageSize: 10,
    CurrentPage: 1,
    TotalCount: 40
  } as IPaging;
  userData = {
    ProPic: '',
    UserName: 'CocaCola'
  }
  showBulkUploadBlocks: boolean = false;

  constructor(private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  showSearchResult(event: string) {
    this.searchText = event;
  }

  pageChanged(ev: any) {
    console.log(ev);
  }

  gotoEmployeeDetails() {
    this.router.navigateByUrl('/admin/employee/details')
  }

  openAddEmployee() {
    this.modalService.open(AddEmployeeComponent, ModalOptions.lfnLg)
  }

}
