import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-task-assigned',
  templateUrl: './task-assigned.component.html',
  styleUrls: ['./task-assigned.component.scss']
})
export class TaskAssignedComponent implements OnInit {

  constructor(public _modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
