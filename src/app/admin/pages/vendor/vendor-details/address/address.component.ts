import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  isLoading: boolean = false;
  address1 = '';

  constructor() { }

  ngOnInit(): void {
  }

  addressFromSearch(address) {
    console.log(address);
    this.address1 = address;
  }

}
