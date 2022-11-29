import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  isLoading: boolean = false;
  latLong = { lat: 40.73, lng: 73.93 };
  biometricsList = ["Heart Rate", "BP", "Temperature", "Table", "test", "Sugar"];
  selectedBiometricsList = [];
  vaccinationList = ["Covid Vaccine", "Flu Vaccine"];
  selectedVaccinationList = [];
  includeBiometrics = false;
  includeVaccination = false;

  constructor(public _modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  addressSelected(address: any) {
    console.log(address);
    this.latLong = { lat: address.geometry.location.lat(), lng: address.geometry.location.lng() }
  }

  uploadedImageRemoved(ev: Event) {
    console.log(ev);
  }

  biometricsSelected($event) {
    this.selectedBiometricsList = $event;
  }

  vaccinationSelected($event) {
    this.selectedVaccinationList = $event;
  }

  removeSelectedBiometric(value) {
    this.selectedBiometricsList = this.selectedBiometricsList.filter(x => x != value);

  }
  removeSelectedVaccination(value) {
    this.selectedVaccinationList = this.selectedVaccinationList.filter(x => x != value);

  }



}
