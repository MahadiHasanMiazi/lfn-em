import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AcknowledgementModalComponent } from 'src/app/common/acknowledgement-modal/acknowledgement-modal.component';
import { ModalOptions } from 'src/app/enum/modalOptions';
import { ConfirmPasswordValidator } from 'src/app/helper/confirmPasswordValidator';
import CustomValidators from 'src/app/helper/customValidators';
import { ICompleteEmployeeAccount } from 'src/app/models/interfaces/user.interfaces';
import { AlertService } from 'src/app/services/alert/alert.service';
import { UserService } from 'src/app/services/common-service/user.service';

@Component({
  selector: 'password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss']
})
export class PasswordFormComponent implements OnInit {

  @Input() restFormData!: ICompleteEmployeeAccount;

  passFieldType = false;
  isLoading = false;
  completeAccountPayloads: ICompleteEmployeeAccount;
  isConfirmPasswordShown = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private alertService: AlertService, private router: Router, private modalService: NgbModal) { }

  passwordForm = this.formBuilder.group(
    {
      password: ['', [Validators.required, CustomValidators.PasswordStrengthValidator]],
      confirmPassword: ['', [Validators.required]]
    },
    {
      validator: ConfirmPasswordValidator("password", "confirmPassword")
    }
  )

  get passwordFormFields() {
    return this.passwordForm.controls;
  }

  ngOnInit(): void {
  }

  togglePassFieldType() {
    this.passFieldType = !this.passFieldType;
  }

  handleFormSubmit() {
    if (this.passwordForm.valid && this.restFormData !== undefined) {
      this.isLoading = true;
      this.completeAccountPayloads = { password: this.passwordForm.value.password, ...this.restFormData };
      const modalRef = this.modalService.open(
        AcknowledgementModalComponent,
        ModalOptions.lg
      );
      modalRef.result.then(() => {
        this.handleAcknowledgementAccept();
      });
    }
  }

  handleAcknowledgementAccept() {
    this.isLoading = true;
    this.completeAccountPayloads = { isAcceptAcknowledgment: true, ...this.completeAccountPayloads };
    this.userService.completeAccount(this.completeAccountPayloads).subscribe({
      next: (response) => {
        console.log(response);
        this.isLoading = false;
        this.alertService.success('Your account has been created successfully');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        this.isLoading = false;
        if (error.errors !== null) {
          error.errors.map(err => {
            this.alertService.error(err.message);
          })
        }
        else {
          this.alertService.error('unknown error')
          console.log(error);
        }
      },
    });
  }
}
