import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IPaging } from 'src/app/models/view-models/paging';
import {ModalOptions} from "../../../../../enum/modalOptions";
import {NewNoteComponent} from "./new-note/new-note.component";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  searchText = "Search note";
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

  openNewNote() {
    this.modalService.open(NewNoteComponent, ModalOptions.lfnLg);
  }

}
