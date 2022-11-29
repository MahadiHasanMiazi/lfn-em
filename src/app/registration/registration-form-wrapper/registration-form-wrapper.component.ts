import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'registration-form-wrapper',
  templateUrl: './registration-form-wrapper.component.html',
  styleUrls: ['./registration-form-wrapper.component.scss']
})
export class RegistrationFormWrapperComponent implements OnInit {

  @Input() stepNo?: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
