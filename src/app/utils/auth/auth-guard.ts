import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { JwtTokenParserService } from "src/app/services/common-service/token/jwt-token-parser.service";
import { TokensService } from "src/app/services/tokens.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router, private tokenService: TokensService, private readonly jwtTokenParser: JwtTokenParserService) { }

  /**
   * Check if user in pages that need to be logged in
   * @param pages
   */
  isInPages(pages: string[], route: ActivatedRouteSnapshot): boolean {
    return pages.some((page) => {
      return route.routeConfig.path === page;
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    if (!this.tokenService.hasUserToken()) {
      // If user is not logged in, redirect to login page
      if (!this.isInPages(["login", "registration"], route)) {
        this.router.navigate(["/login"]);
        return false;
      }
      return true;
    }

    if (this.tokenService.hasUserToken()) {
      if (this.jwtTokenParser.userLoggedin()) {
        if (this.isInPages(["login", "registration"], route)) {
          this.router.navigate(["/admin"]);
          return false;
        }
        return true;
      } else {
        // user has site token but not logged in
        if (!this.isInPages(["login", "registration"], route)) {
          this.router.navigate(["/login"]);
          return false;
        }
        return true;
      }
    }
  }
}
