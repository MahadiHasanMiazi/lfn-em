import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { debounceTime, distinctUntilChanged, Subject } from "rxjs";
import { userSearchDebounceTime } from "src/app/utils/constant";

@Component({
  selector: "table-search-field",
  templateUrl: "./table-search-field.component.html",
  styleUrls: ["./table-search-field.component.scss"],
})
export class TableSearchFieldComponent implements OnInit {
  @Output() searchValueChange = new EventEmitter();

  @Input() searchValue: string = "";

  addUserSearchResultUpdate = new Subject<any>();

  constructor() {}

  ngOnInit(): void {
    this.addUserSearchResultUpdate.pipe(debounceTime(userSearchDebounceTime), distinctUntilChanged()).subscribe((value: any) => {
      this.searchValueChange.emit(value);
    });
  }
  onSearchValueChange(ev: Event) {
    this.addUserSearchResultUpdate.next(ev);
  }
}
