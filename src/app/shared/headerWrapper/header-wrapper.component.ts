import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IDecodedJwtInterface } from "src/app/models/interfaces/decoded-jwt.interface";
import { AlertService } from "src/app/services/alert/alert.service";
import { SiteAuthService } from "src/app/services/common-service/site-auth.service";
import { JwtTokenParserService } from "src/app/services/common-service/token/jwt-token-parser.service";
import { UserService } from "src/app/services/common-service/user.service";
import { TokensService } from "src/app/services/tokens.service";
import { AuthService } from "../../services/common-service/auth.service";

@Component({
  selector: "header-wrapper",
  templateUrl: "./header-wrapper.component.html",
  styleUrls: ["./header-wrapper.component.scss"],
})
export class HeaderWrapperComponent implements OnInit {
  profileName: string = "";

  constructor(
    private userService: UserService,
    private decodeJwt: JwtTokenParserService,
    private readonly authService: AuthService,
    private readonly router: Router,
    private tokenService: TokensService,
    private alertService: AlertService,
    private siteAuth: SiteAuthService
  ) { }

  ngOnInit(): void {
    const { email, userId }: IDecodedJwtInterface = this.decodeJwt.parseJwtToken();
    this.userService.getUserByEmail(email).subscribe({
      next: (response) => {
        this.profileName = response.payload.firstName + " " + response.payload.lastName;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  logOut() {
    this.authService.logout().subscribe({
      next: () => {
        // this.tokenService.removeUserToken();
        this.siteAuth.replaceSiteToken().subscribe({
          next: (data: any) => {
            this.tokenService.storeUserToken(data?.payload);
            this.router.navigate(["/login"]);
          },
          error: (error) => {
            console.log(error);
          },
        });
      },
      error: (error) => {
        // this.tokenService.removeUserToken();
        this.alertService.error("Failed to logout.");
        console.log(error);
      },
    });
  }
}
