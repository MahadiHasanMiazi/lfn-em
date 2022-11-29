import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { UserService } from "../../../../services/common-service/user.service";
import { AlertService } from "../../../../services/alert/alert.service";
import { JwtTokenParserService } from "../../../../services/common-service/token/jwt-token-parser.service";
import { Messages } from 'src/app/utils/messages';

@Component({
  selector: 'app-add-contractor',
  templateUrl: './add-contractor.component.html',
  styleUrls: ['./add-contractor.component.scss']
})
export class AddContractorComponent implements OnInit {

  @Input() organizationId!: string;

  addContractorForm: FormGroup;
  isLoading = false;
  isAddContractorButtonDisable = true;

  constructor(public _modal: NgbActiveModal,
    public fb: FormBuilder,
    private readonly userService: UserService,
    private readonly alertService: AlertService) { }

  ngOnInit(): void {
    this.createAddContractorForm()
  }

  createAddContractorForm() {
    this.addContractorForm = this.fb.group({
      email: ['', Validators.required],
      userRole: ['contractor', Validators.required]
    });
  }


  addContractor() {
    console.log(this.addContractorForm);
    if (this.addContractorForm.valid) {
      this.isLoading = true;
      const body = {
        email: this.addContractorForm.value.email,
        userRole: this.addContractorForm.value.userRole,
        organizationId: this.organizationId
      }
      this.userService.addUser(body)
        .subscribe({
          next: () => {
            this.isLoading = false;
            this.alertService.success(Messages.EMPLOYEE_ADDED_SUCCESSFULLY)
            this._modal.close('userAddedSuccessfully')
          },
          error: (error: any) => {
            this.isLoading = false;
            error.error.errors[0].message.forEach((message: any) => {
              this.alertService.error(message)
            })
          }
        });
    }
  }
  emailInput(): void {
    this.isAddContractorButtonDisable =
      (this.addContractorForm.value.email !== '' && this.addContractorForm.value.userRole !== '') ?
        false : true;
  }

}
