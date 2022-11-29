import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "user-thumb-name",
  templateUrl: "./user-thumb-name.component.html",
  styleUrls: ["./user-thumb-name.component.scss"],
})
export class UserThumbNameComponent implements OnInit {
  @Input() userData: {
    ProPic: string;
    UserName: string;
  } = null;

  constructor() {}
  ngOnInit(): void {}
}
