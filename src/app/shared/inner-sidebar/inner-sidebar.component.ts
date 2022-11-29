import { Component, Input, OnInit } from '@angular/core';
// interface ISidebarTopInfo {
//   coverImgUrl: String;
//   logoUrl: String;
//   name: String;
// }

@Component({
  selector: 'inner-sidebar',
  templateUrl: './inner-sidebar.component.html',
  styleUrls: ['./inner-sidebar.component.scss']
})

export class InnerSidebarComponent implements OnInit {
  @Input() sidebarTopInfo;
  @Input() type: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
