import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {


  companyData = {
    coverImgUrl: 'assets/images/client-details-banner.svg',
    logoUrl: 'assets/images/school.svg',
    name: 'Macdonalds'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
