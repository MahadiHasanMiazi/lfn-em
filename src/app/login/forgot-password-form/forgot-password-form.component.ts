import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ConfirmPasswordValidator } from "src/app/helper/confirmPasswordValidator";
import CustomValidators from "../../helper/customValidators";
import { IUserInfo } from "../../models/interfaces/user.interfaces";
import { AlertService } from "../../services/alert/alert.service";
import { AuthService } from "../../services/common-service/auth.service";
import { TwoFactorAuthenticationService } from "../../services/common-service/two-fa-authentication.service";
import { UserService } from "../../services/common-service/user.service";

@Component({
  selector: "app-forgot-password-form",
  templateUrl: "./forgot-password-form.component.html",
  styleUrls: ["./forgot-password-form.component.scss"],
})
export class ForgotPasswordFormComponent implements OnInit {
  isLoading: boolean = false;
  counter = 300;
  code: string = "";
  isPasswordShown = false;
  isConfirmPasswordShown = false
  userInfo!: IUserInfo;
  isClearOtp = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly twofaService: TwoFactorAuthenticationService,
    private alertService: AlertService,
    private authService: AuthService,
    private readonly userService: UserService
  ) { }

  ngOnInit(): void { }

  @Output()
  onComplete = new EventEmitter<any>();

  @Output()
  onError = new EventEmitter<any>();

  @Output()
  onClickSignIn = new EventEmitter<any>();

  formMode: "forgot" | "otp" | "reset" = "forgot";

  forgotForm: FormGroup = this.formBuilder.group({
    email: ["", [Validators.required, Validators.email]],
  });
  resetPasswordForm: FormGroup = this.formBuilder.group(
    {
      password: ["", [Validators.required, CustomValidators.PasswordStrengthValidator]],
      confirmPassword: ["", [Validators.required]],
    },
    {
      validator: ConfirmPasswordValidator("password", "confirmPassword")
    }
  );

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

  /**
   * This function is used to send forgot password OTP
   */
  handleSubmit() {
    if (this.forgotForm.valid) {
      this.isLoading = true;
      this.twofaService
        .email2fa(this.forgotForm.value.email)
        .subscribe({
          next: () => {
            this.isLoading = false;
            this.formMode = "otp";
            this.isClearOtp = true;
            // this.getUserInfo(this.forgotForm.value.email);
          },
          error: () => {
            this.isLoading = false;
            this.isClearOtp = true;
            this.alertService.error("Failed to send otp!");
          },
        });
    }
  }

  updateCount(count: number) {
    this.counter = count;
  }

  verifyOtp(code: string) {
    const { email: username } = this.forgotForm.value;
    this.isLoading = true;
    this.isClearOtp = false;
    if (!code) return;
    this.code = code;

    this.twofaService
      .verifyOTP({
        Key: username,
        Code: code,
      })
      .subscribe({
        next: () => {
          this.isLoading = false;
          this.formMode = "reset";
        },
        error: () => {
          this.isLoading = false;
          this.isClearOtp = true;
          this.alertService.error("Invalid OTP");
        },
      });
  }

  /**
   * This function is used to send forgot password OTP
   */
  handleSubmitResetForm() {
    if (this.resetPasswordForm.status == 'VALID') {
      this.isLoading = true;
      this.authService
        .resetPasswordUsingCode({
          Code: this.code,
          NewPassword: this.resetPasswordForm.value.password,
          UserName: this.forgotForm.value.email,
        })
        .subscribe({
          next: () => {
            this.isLoading = false;
            this.alertService.success("Password reset successfully");
            this.onComplete.emit(true);
          },
          error: (error) => {
            this.isLoading = false;
            this.alertService.error("Failed to reset password");
            this.onError.emit(error);
          },
        });
    }
  }

  reSendOTP() {
    this.isClearOtp = true;
    this.handleSubmit();
  }
}
