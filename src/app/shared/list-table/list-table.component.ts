import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from "@angular/core";

@Component({
  selector: "list-table",
  templateUrl: "./list-table.component.html",
  styleUrls: ["./list-table.component.scss"],
})
export class ListTableComponent implements OnInit, OnChanges {
  @Input() isDataLoaded: boolean = false;
  @Input() dataLength: number;
  @Input() row: number = 10;
  @Input() column: number = 10;
  @Input() paging: any;
  @Output() onPageChange = new EventEmitter();

  itemPerPage: number;
  currentPage: number;
  totalCount: number;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.itemPerPage = this.paging.PageSize;
    this.currentPage = this.paging.CurrentPage;
    this.totalCount = this.paging.TotalCount;
  }

  currentPageLink(ev) {
    this.onPageChange.emit(ev);
  }
}
