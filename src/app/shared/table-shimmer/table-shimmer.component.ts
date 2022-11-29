import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'table-shimmer',
  templateUrl: './table-shimmer.component.html',
  styleUrls: ['./table-shimmer.component.scss']
})
export class TableShimmerComponent implements OnInit {

  @Input() row: number = 10;
  @Input() column: number = 10;

  rows: any[];
  columns: any[];

  constructor() { }

  ngOnInit(): void {

    this.rows = this.counter(this.row);
    this.columns = this.counter(this.column);
  }

  counter(n: number) {
    const arr = new Array();
    for (let i = 0; i < n; i++) {
      arr.push('');
    }
    return arr;
  }

}
