import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import CustomValidators from 'src/app/helper/customValidators';
import { BaseResponse, IQueryParams } from 'src/app/models/interfaces/base-response';
import { IUserInfo } from 'src/app/models/interfaces/user.interfaces';
import { AlertService } from 'src/app/services/alert/alert.service';
import { OrganizationService } from 'src/app/services/common-service/organization.service';
import { UserService } from 'src/app/services/common-service/user.service';

@Component({
  selector: 'user-information-form',
  templateUrl: './user-information-form.component.html',
  styleUrls: ['./user-information-form.component.scss']
})
export class UserInformationFormComponent implements OnInit {

  @Input() email!: string;
  @Input() phone!: number;
  @Output() continue = new EventEmitter();
  isLoading = false;
  designations = [];
  // public dateOffBirth: NgbDateStruct;
  organizationId: string;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private alertService: AlertService, private organizationService: OrganizationService) {
  }

  userInfoForm: FormGroup = this.formBuilder.group({
    FirstName: ['', [Validators.required]],
    LastName: ['', [Validators.required]],
    DateOfBirth: new FormControl<NgbDateStruct>(null, [Validators.required]),
    Gender: ['', [Validators.required]],
    DesignationIds: [null],
    IsAcceptTermsAndCondition: new FormControl<boolean>(false)
  });

  get userInfoFormFields() {
    return this.userInfoForm.controls;
  }

  ngOnInit(): void {
    if (this.email !== undefined) {
      this.getOrganizationID();
    }
  }

  getOrganizationID() {
    this.userService.getUserByEmail(this.email).subscribe(
      {
        next: (response: BaseResponse<IUserInfo>) => {
          this.organizationId = response.payload.organizationId;
          this.organizationService.getDesignations({ organizationId: this.organizationId }).subscribe(
            {
              next: (response: BaseResponse<any>) => {

                if (response.payload.length) {
                  this.designations = response.payload;
                }
              },
              error: (error: BaseResponse<any>) => {
                if (error.errors !== null) {
                  error.errors.map(err => {
                    this.alertService.error(err.message);
                  })
                }
                else {
                  this.alertService.error('unknown error')
                }
              }
            }
          );
        },
        error: (error: BaseResponse<any>) => {
          if (error.errors !== null) {
            error.errors.map(err => {
              this.alertService.error(err.message);
            })
          }
          else {
            this.alertService.error('unknown error')
          }
        }
      }
    )
  }
  submit() {
    const datefieldVal = this.userInfoForm.get('DateOfBirth').value;
    if (datefieldVal) {
      var dob = new Date(datefieldVal.month + '/' + datefieldVal.day + '/' + datefieldVal.year).toISOString();
    }
    const { DateOfBirth, DesignationIds, ...userInfoExceptDob } = this.userInfoForm.value;
    let designationIds = [];
    if (this.userInfoForm.value.designationIds) {
      designationIds.push(this.userInfoForm.value.designationIds);
    }

    // this.userInfoForm.controls.DesignationIds.setValue([DesignationIds])
    if (this.userInfoForm.status == 'VALID' && !!this.email && !!this.phone && dob != undefined) {
      const userInfo = { PersonalEmail: this.email, BusinessEmail: this.email, Phone: this.phone, DateOfBirth: dob, DesignationIds: designationIds, ...userInfoExceptDob }

      this.continue.emit(userInfo);
    }
  }

}
