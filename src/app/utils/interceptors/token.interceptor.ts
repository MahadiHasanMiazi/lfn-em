import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokensService } from 'src/app/services/tokens.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private readonly tokenService: TokensService,
    private router: Router
  ) { }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const customHeaders = {};

    if (
      this.tokenService.hasUserToken() &&
      !!!request.url.includes('identity/token')
    ) {
      customHeaders['Authorization'] = `Bearer ${this.tokenService.getUserToken().access_token
        }`;
    }

    const clonedRequest = request.clone({
      setHeaders: {
        ...customHeaders,
      },
    });

    return next.handle(clonedRequest);
  }
}
