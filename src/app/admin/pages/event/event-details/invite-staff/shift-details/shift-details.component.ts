import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'shift-details',
  templateUrl: './shift-details.component.html',
  styleUrls: ['./shift-details.component.scss']
})
export class ShiftDetailsComponent implements OnInit {

  @Input() staffId: number;
  @Output() onClose = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  addressChanged(address) {
    console.log(address);
  }
  shiftDetailsClosed() {
    this.onClose.emit(true);
  }
}
