import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IntlInputPhoneConfigService } from 'src/app/services/common-service/intl-input-phone-config.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../../../services/common-service/user.service";
import { AlertService } from "../../../../services/alert/alert.service";
import { JwtTokenParserService } from "../../../../services/common-service/token/jwt-token-parser.service";
import { Messages } from 'src/app/utils/messages';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  @Input() organizationId!: string;

  isLoading: boolean = false;
  isAddUserButtonDisable = true;
  passFieldType: boolean = false;
  phone: any;
  isSubmitted = false;
  addUserForm: FormGroup;

  constructor(public _modal: NgbActiveModal,
    public intlPhoneConfig: IntlInputPhoneConfigService,
    private fb: FormBuilder,
    private readonly userService: UserService,
    private readonly decodeJwt: JwtTokenParserService,
    private readonly alertService: AlertService
  ) {
    this.intlPhoneConfig.phone.subscribe((x) => {
      this.phone = x;
    });
  }

  ngOnInit(): void {
    this.createAddUserForm();
  }

  createAddUserForm() {
    this.addUserForm = this.fb.group({
      email: ['', Validators.required],
      userRole: ['', Validators.required]
    });
  }

  setPhone() {
    this.intlPhoneConfig.setValue('7144567891', '714');
  }

  togglePassFieldType() {
    this.passFieldType = !this.passFieldType;
  }

  addUser() {
    this.isLoading = true;
    this.isAddUserButtonDisable = true
    const body = {
      email: this.addUserForm.value.email,
      userRole: this.addUserForm.value.userRole,
      organizationId: this.organizationId
    }

    this.userService.addUser(body)
      .subscribe({
        next: (response) => {
          this.isLoading = false;
          this.isAddUserButtonDisable = false
          this.alertService.success(Messages.EMPLOYEE_ADDED_SUCCESSFULLY)
          this.userService.user.next(true);
          this._modal.close('userAddedSuccessfully');
        },
        error: (error: any) => {
          this.isLoading = false;
          this.isAddUserButtonDisable = false
          error.error?.errors[0]?.message?.forEach((message: any) => {
            this.alertService.error(message)
          })
        }
      })
  }

  emailInput(): void {
    this.isAddUserButtonDisable =
      (this.addUserForm.value.email !== '' && this.addUserForm.value.userRole !== '') ?
        false : true;
  }

  selectRole(): void {
    this.isAddUserButtonDisable =
      (this.addUserForm.value.email !== '' && this.addUserForm.value.userRole !== '') ?
        false : true
  }
}
