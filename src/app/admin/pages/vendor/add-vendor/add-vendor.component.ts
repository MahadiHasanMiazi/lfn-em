import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { DropzoneConfigInterface } from "ngx-dropzone-wrapper";
import { AuthService } from "src/app/services/common-service/auth.service";
import { IntlInputPhoneConfigService } from "src/app/services/common-service/intl-input-phone-config.service";
import * as moment from "moment";
import { TokensService } from "src/app/services/tokens.service";
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { NumberResult } from "intl-input-phone";
import { OrganizationService } from "src/app/services/common-service/organization.service";
import { AlertService } from "src/app/services/alert/alert.service";

@Component({
  selector: "app-add-vendor",
  templateUrl: "./add-vendor.component.html",
  styleUrls: ["./add-vendor.component.scss"],
})
export class AddVendorComponent implements OnInit {
  isLoading = false;
  phone: any;
  dropzoneMessage = '<i class="icon-upload"></i><br/>Click or drag and drop file here to upload';
  dropzonePlaceholder = "";
  @Input() organizationId!: string;
  // Dropzone Config
  public config: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 1,
    maxFilesize: 20,
    headers: {
      Authorization: "Bearer " + this.tokenService.getUserToken().access_token,
      "Cache-Control": null,
      "X-Requested-With": null,
    },
    url: "/api/Patient/Upload?fileName=" + moment().format("xDDMMYYYY") + "_1",
    acceptedFiles: "image/*",
    accept: function (file, done) {
      if (file.size == 0) {
        done("Empty files will not be uploaded.");
      } else {
        done();
      }
    },
    autoReset: null,
    errorReset: null,
    cancelReset: null,
    addRemoveLinks: true,
    dictRemoveFile: '<i class="icon-close"></i>',
    dictCancelUpload: '<i class="icon-close"></i>',
    dictCancelUploadConfirmation: "Do you want to cancel this file?",
  };
  @ViewChild("addVendorFormRef") addVendorFormRef: NgForm;
  constructor(
    private readonly tokenService: TokensService,
    public _modal: NgbActiveModal,
    public intlPhoneConfig: IntlInputPhoneConfigService,
    public auth: AuthService,
    public formBuilder: FormBuilder,
    public organizationService: OrganizationService,
    public alertService: AlertService
  ) {
    this.intlPhoneConfig.phone.subscribe((x) => {
      this.phone = x;
      console.log(this.phone);
    });
  }

  addVendorForm: FormGroup = this.formBuilder.group({
    vendorName: ["", Validators.required],
    vendorType: ["", [Validators.required]],
    address: ["", Validators.required],
    suite: [""],
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    phone: new FormControl<NumberResult>(null, Validators.required),
  });

  get addVendorFields() {
    return this.addVendorForm.controls;
  }

  ngOnInit(): void { }

  setPhone() {
    this.intlPhoneConfig.setValue("7144567891", "714");
  }

  addressSelected(address: any) {
    console.log(address);
  }

  uploadFile(args: any): void {
    console.log(args);
  }
  uploadedFileRemoved(args: any) {
    console.log(args);
  }

  handleSubmitAddVendorForm() {
    console.log(this.addVendorForm);
    const payload = this.addVendorForm.value;
    const body = {
      Name: payload.vendorName,
      Address: payload.address,
      phoneNumber: payload.phone?.Number,
      companyEmail: payload.email,
      ContactsFirstName: payload.firstName,
      contactsLastName: payload.lastName,
      contactsEmail: payload.email,
      contactsPhone: payload.phone?.Number,
      operationType: 2,
      sourceId: this.organizationId,
    };
    if (this.addVendorForm.status == "VALID") {
      this.isLoading = true;
      this.organizationService.createOrganization(body).subscribe({
        next: (res) => {
          console.log(res);
          this.alertService.success('Vendor added successfully');
          this.isLoading = false;
          this._modal.close('vendorAddedSuccessfully');
        },
        error: (err) => {
          this.alertService.success('Something went wrong');
          console.log(err);
          this.isLoading = false;
        },
      });
    }
  }
}
