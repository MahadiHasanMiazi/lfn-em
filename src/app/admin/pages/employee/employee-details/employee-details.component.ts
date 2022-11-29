import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  editContact: boolean = false;
  isLoading: boolean = false;
  companyDetails: boolean = true;
  companyData = {
    coverImgUrl: 'assets/images/client-details-banner.svg',
    logoUrl: 'assets/images/userPhoto.jpg',
    name: 'Macdonalds'
  }

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
