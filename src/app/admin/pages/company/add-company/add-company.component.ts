import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {IntlInputPhoneConfigService} from 'src/app/services/common-service/intl-input-phone-config.service';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {OrganizationService} from "../../../../services/common-service/organization.service";
import {organizationType, successfullyAddItem} from "../../../../utils/constant";
import {IImageUpload, IUploadSuccessResponse} from "../../../../models/interfaces/content.interfaces";
import {ImageType} from "../../../../enum/company.enum";
import {JwtTokenParserService} from "../../../../services/common-service/token/jwt-token-parser.service";
import {IDecodedJwtInterface} from "../../../../models/interfaces/decoded-jwt.interface";

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {
  @Input() organizationId = '';
  @ViewChild('addCompanyFormRef') addCompanyFormRef: NgForm

  isLoading: boolean = false;
  isAddButtonDisable = true;
  companyType = organizationType

  phone: any;
  addCompanyForm: FormGroup
  companyAddress: any;
  companyLogo: IImageUpload
  companyCoverPhoto: IImageUpload;
  selectedCompanyType: number;
  logoInformation: IUploadSuccessResponse
  coverPhotoInformation: IUploadSuccessResponse


  constructor(public _modal: NgbActiveModal,
              public intlPhoneConfig: IntlInputPhoneConfigService,
              private fb: FormBuilder,
              private readonly organizationService: OrganizationService,
              private readonly decodedJwtToken: JwtTokenParserService) {
    this.intlPhoneConfig.phone.subscribe((x) => {
      this.phone = x;
      console.log(this.phone);
    });
  }

  ngOnInit(): void {
    this.createAddCompanyForm()
  }



  createAddCompanyForm(){
    this.addCompanyForm = this.fb.group({
      companyName: ['', Validators.required],
      email: ['', [Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      companyType: ['', Validators.required],
      numberOfEmployee: [''],
      contactPersonNumber: [null, Validators.required],
      address: [''],
      address2: [''],
      broker: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    })
  }

  setPhone() {
    this.intlPhoneConfig.setValue('7144567891', '714');
  }

  addressSelected(address: any) {
    console.log(address);
    this.companyAddress = address
  }

  uploadedFileRemoved(ev: Event) {
    console.log(ev);
  }


  onSubmit(){
    const companyForm = this.addCompanyForm.value
    if(this.addCompanyForm.valid){
      const body = {
        Name: companyForm.companyName,
        Logo: this.companyLogo,
        CoverPhoto: this.companyCoverPhoto,
        PhoneNumber: companyForm.contactPersonNumber.Number,
        ContactsPhone: companyForm.contactPersonNumber.Number,
        CompanyEmail: companyForm.email,
        ContactsEmail: companyForm.email,
        OperationType: this.selectedCompanyType,
        ContactsFirstName: companyForm.firstName,
        ContactsLastName: companyForm.lastName,
        SourceId: this.organizationId,
        Address: companyForm.address + ',' +companyForm.address2,
        Numberofstaff: companyForm.numberOfEmployee
      }
      console.log('body', body)
      this.organizationService.createOrganization(body)
        .subscribe({
          next: (response: any) => {
            this._modal.close(successfullyAddItem)
          },
          error: (error: any) => {
            console.log('error', error)
          }
        })
    }else {
      console.log('form error', this.addCompanyForm.controls)
    }
  }

  selectCompanyType(event: any) {
    console.log('event', event.target.value)
    this.selectedCompanyType = Number(event.target.value)
  }

  uploadLogo(event: any) {
    this.logoInformation = event[1].payload
    this.companyLogo = this.setImageProperty(this.logoInformation)
  }

  uploadCoverPhoto(event: any) {
    this.coverPhotoInformation = event[1].payload;
    this.companyCoverPhoto = this.setImageProperty(this.coverPhotoInformation)
  }

  setImageProperty(imageInformation) {
    return {
      OrganizationId:this.organizationId,
      ImageFor: ImageType.CoverPhoto,
      fileName: imageInformation.fileName,
      storageBaseUrl: imageInformation.storageBaseUrl,
      containerName:imageInformation.containerName,
      thumbnailContainerName:imageInformation.thumbnailContainerName,
      UploadFileId:imageInformation.id,
      UserId: this.decodedJwtToken.parseJwtToken().userId
    }
  }
}
