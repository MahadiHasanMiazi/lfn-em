import { Component, Input, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'field-errors',
  templateUrl: './field-errors.component.html',
  styleUrls: ['./field-errors.component.scss']
})
export class FieldErrorsComponent implements OnInit {

  @Input() formField: FormControl;
  @Input() formRef: NgForm;
  @Input() name: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
