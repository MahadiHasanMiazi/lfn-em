import { Component, OnInit } from "@angular/core";
import { SiteAuthService } from "./services/common-service/site-auth.service";
import { TokensService } from "./services/tokens.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(private siteAuth: SiteAuthService, private tokenService: TokensService) {}
  ngOnInit(): void {
    if (!this.tokenService.hasUserToken()) {
      this.siteAuth.getSiteToken();
    }
  }
}
