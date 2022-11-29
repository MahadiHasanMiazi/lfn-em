import { Component, Input, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { NumberResult } from "intl-input-phone";
import { IntlInputPhoneConfigService } from "../../../../services/common-service/intl-input-phone-config.service";
import { CompanyType } from "../../../../enum/company.enum";
import { successfullyAddItem } from "../../../../utils/constant";
import { OrganizationService } from "../../../../services/common-service/organization.service";

@Component({
  selector: "app-broker-add",
  templateUrl: "./broker-add.component.html",
  styleUrls: ["./broker-add.component.scss"],
})
export class BrokerAddComponent implements OnInit {
  addBrokerForm: FormGroup;
  constructor(
    public _modal: NgbActiveModal,
    private readonly fb: FormBuilder,
    public intlPhoneConfig: IntlInputPhoneConfigService,
    public organizationService: OrganizationService
  ) {
    this.intlPhoneConfig.phone.subscribe((x) => {
      this.phone = x;
      console.log(this.phone);
    });
  }
  ngOnInit(): void {
    this.createAddBrokerForm();
  }
  isLoading: boolean = false;
  phone: any;
  @Input() organizationId = "";

  setPhone() {
    this.intlPhoneConfig.setValue("7144567891", "714");
  }

  createAddBrokerForm() {
    this.addBrokerForm = this.fb.group({
      name: ["", Validators.required],
      address1: ["", Validators.required],
      address2: [""],
      numberOfEmployees: [""],
      contactPerson__phone: [null, Validators.required],
      contactPerson__email: ["", [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      contactPerson__firstName: ["", Validators.required],
      contactPerson__lastName: ["", Validators.required],
    });
  }

  handleAddBrokerSubmit() {
    if (this.addBrokerForm.valid) {
      this.isLoading = true;
      const body = {
        Name: this.addBrokerForm.value.name,
        Address: this.addBrokerForm.value.address1 + "," + this.addBrokerForm.value.address2,
        Numberofstaff: this.addBrokerForm.value.numberOfEmployees,
        ContactsPhone: this.addBrokerForm.value.contactPerson__phone.Number,
        CompanyEmail: this.addBrokerForm.value.contactPerson__email,
        ContactsEmail: this.addBrokerForm.value.contactPerson__email,
        OperationType: CompanyType.Broker,
        ContactsFirstName: this.addBrokerForm.value.contactPerson__firstName,
        ContactsLastName: this.addBrokerForm.value.contactPerson__lastName,
        SourceId: this.organizationId,
      };

      console.log("submitting broker", body);

      this.organizationService.createOrganization(body).subscribe({
        next: (response: any) => {
          this._modal.close(successfullyAddItem);
          this.isLoading = false;
        },
        error: (error: any) => {
          console.log("error", error);
          this.isLoading = false;
        },
      });
    } else {
      console.log("invalid form", this.addBrokerForm);
    }
  }

  addressSelected($event: any) {}

  uploadedFileRemoved($event: any) {}

  uploadFile($event: any) {}
}
