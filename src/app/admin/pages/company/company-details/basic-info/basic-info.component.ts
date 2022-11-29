import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {

  editContact: boolean = false;
  isLoading: boolean = false;
  companyDetails: boolean = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.companyDetails = false;
    }, 1500);
  }

  onSubmit() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.editContact = false;
    }, 1500);
  }

}
