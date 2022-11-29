import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IUserInfo } from "src/app/models/interfaces/user.interfaces";
import { AlertService } from "src/app/services/alert/alert.service";
import { UserService } from "src/app/services/common-service/user.service";
import { AuthService } from "../../services/common-service/auth.service";
import { AcknowledgementModalComponent } from "../../common/acknowledgement-modal/acknowledgement-modal.component";
import { ModalOptions } from "../../enum/modalOptions";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent implements OnInit {
  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly alertService: AlertService,
    private readonly modalService: NgbModal
  ) {}
  formMode: "login" | "otp" = "login";
  isLoading = false;
  counter = 300;
  isPasswordShown = false;
  userInfo?: IUserInfo;
  isClearOtp: boolean = false;

  @Input()
  subject: any;

  @Output()
  onComplete = new EventEmitter<{ res: any; fields: { email: string; password: string } }>();

  @Output()
  onError: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onClickForgotPassword: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    this.subject.subscribe(() => {
      this.handleLoginSubmit();
    });
  }

  public loginForm: FormGroup = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", Validators.required],
  });

  updateCount(time: any) {
    this.counter = time;
  }

  /**
   * Get user info using email
   * @param username - email
   */
  getUserInfo(username: string) {
    this.userService.getUserByEmail(username).subscribe({
      next: (res) => {
        this.userInfo = res.payload;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  handleLoginSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      const { email: username, password } = this.loginForm.value;
      this.getUserInfo(username);
      this.authService
        .sendLoginOtp({
          username,
          password,
        })
        .subscribe({
          next: () => {
            this.isLoading = false;
            this.formMode = "otp";
          },
          error: (error) => {
            this.onError.emit(error);
            this.isLoading = false;
            if (error.error.ExternalError === "Acknowledgment Acceptance Require") {
              this.openAcknowledgementModal();
            }
            this.alertService.error(error.error.ExternalError);
          },
        });
    }
  }

  handleOtpSubmit(code: string) {
    this.isLoading = true;
    this.isClearOtp = false;
    this.authService
      .getTokenUsingOtp({
        username: this.loginForm.value.email,
        code,
      })
      .subscribe({
        next: () => {
          this.isLoading = false;
          this.onComplete.emit();
        },
        error: () => {
          this.alertService.error("Invalid OTP");
          this.isClearOtp = true;
          this.isLoading = false;
        },
      });
  }

  openAcknowledgementModal() {
    const modalRef = this.modalService.open(AcknowledgementModalComponent, ModalOptions.lg);
    modalRef.result.then(() => {
      this.handleAcknowledgementSubmit();
    });
  }

  handleAcknowledgementSubmit() {
    this.authService.acknowledgeUser(this.loginForm.value.email).subscribe({
      next: () => {
        this.alertService.success("Acknowledged successfully. You can login now");
        this.handleLoginSubmit();
      },
      error: () => {
        this.alertService.error("Failed to acknowledge. Please try again");
      },
    });
  }

  reSendOTP() {
    this.handleLoginSubmit();
  }
}
