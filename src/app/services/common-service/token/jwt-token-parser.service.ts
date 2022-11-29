import { Injectable } from "@angular/core";
import jwt_decode from "jwt-decode";
import { IDecodedJwtInterface } from "../../../models/interfaces/decoded-jwt.interface";

@Injectable({
  providedIn: "root",
})
export class JwtTokenParserService {
  constructor() {}

  parseJwtToken() {
    const token = localStorage.getItem("access_token");
    const decodedToken: IDecodedJwtInterface = jwt_decode(token);
    return decodedToken;
  }

  userLoggedin(): boolean {
    try {
      const decodedToken = this.parseJwtToken();
      return decodedToken.userLoggedin == "True";
    } catch (e) {
      return false;
    }
  }
}
