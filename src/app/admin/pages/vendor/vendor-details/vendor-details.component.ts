import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.scss']
})
export class VendorDetailsComponent implements OnInit {

  companyData = {
    coverImgUrl: 'assets/images/client-details-banner.svg',
    logoUrl: 'assets/images/school.svg',
    name: 'Vendor Name'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
