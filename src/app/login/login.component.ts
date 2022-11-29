import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AcknowledgementModalComponent } from "../common/acknowledgement-modal/acknowledgement-modal.component";
import { ModalOptions } from "../enum/modalOptions";
import CustomValidators from "../helper/customValidators";
import { AlertService } from "../services/alert/alert.service";
import { AuthService } from "../services/common-service/auth.service";
import { TwoFactorAuthenticationService } from "../services/common-service/two-fa-authentication.service";
import { IUserInfo } from "../models/interfaces/user.interfaces";
import { UserService } from "../services/common-service/user.service";
import { Subject } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private readonly authService: AuthService,
    private readonly twofaService: TwoFactorAuthenticationService,
    private readonly alertService: AlertService,
    private readonly modalService: NgbModal,
    private readonly userService: UserService
  ) {}

  formToShow: "login" | "forgot-password" | "reset-password" = "login";

  ngOnInit(): void {}

  /**
   * -----------------------------------------------------------------------------
   *    Login Form
   * -----------------------------------------------------------------------------
   */
  loginFormSubmissionSubject = new Subject();

  onLoginFormComplete() {
    this.router.navigate(["/admin"]);
  }
}
