import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {
  @Input() isUpdate: boolean = false;

  isLoading: boolean = false;

  constructor(public _modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
