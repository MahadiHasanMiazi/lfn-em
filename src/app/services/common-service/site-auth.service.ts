import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthApiEndPoint } from 'src/app/helper/api-url.config';
import { environment } from 'src/environments/environment';
import { TokensService } from '../tokens.service';

@Injectable({
  providedIn: 'root',
})
export class SiteAuthService {
  constructor(private http: HttpClient, private tokenService: TokensService) { }

  getSiteToken() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    // headers.append('origin', 'https://microservices.redlimesolutions.ml');
    let body = new URLSearchParams({ grant_type: 'authenticate_site' });
    // body.set('grant_type', 'authenticate_site');
    // const body = JSON.stringify({ 'grant_type': 'authenticate_site' });

    return this.http
      .post(environment.BASE_URL + AuthApiEndPoint.identity, body, {
        headers: headers,
      })
      .subscribe({
        next: (data: any) => {
          this.tokenService.storeUserToken(data?.payload);
        },
        error: (error) => {
          console.log(error);
        },
      });

    // .subscribe({
    //   next: (data: any) => {
    //     this.tokenService.storeUserToken(data?.payload);
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   },
    // });
  }
  replaceSiteToken() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    // headers.append('origin', 'https://microservices.redlimesolutions.ml');
    let body = new URLSearchParams({ grant_type: 'authenticate_site' });
    // body.set('grant_type', 'authenticate_site');
    // const body = JSON.stringify({ 'grant_type': 'authenticate_site' });

    return this.http
      .post(environment.BASE_URL + AuthApiEndPoint.identity, body, {
        headers: headers,
      })

  }
}
