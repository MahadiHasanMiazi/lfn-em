import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  passFieldType: boolean = false;
  isLoading: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  togglePassFieldType() {
    this.passFieldType = !this.passFieldType;
  }
}
