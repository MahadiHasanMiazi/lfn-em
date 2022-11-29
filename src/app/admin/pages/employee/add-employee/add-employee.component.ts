import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IntlInputPhoneConfigService } from 'src/app/services/common-service/intl-input-phone-config.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  isLoading: boolean = false;

  phone: any;

  constructor(public _modal: NgbActiveModal, public intlPhoneConfig: IntlInputPhoneConfigService) {
    this.intlPhoneConfig.phone.subscribe((x) => {
      this.phone = x;
      console.log(this.phone);
    });
  }

  ngOnInit(): void {
  }

  setPhone() {
    this.intlPhoneConfig.setValue('7144567891', '714');
  }

  addressSelected(address: any) {
    console.log(address);
  }

}
