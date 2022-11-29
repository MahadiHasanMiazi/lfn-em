import { Injectable } from '@angular/core';

export interface UserToken {
  access_token: string;
  refresh_token: string;
}

@Injectable({
  providedIn: 'root',
})
export class TokensService {
  constructor() {}

  storeUserToken(tokens: UserToken) {
    localStorage.setItem('access_token', tokens.access_token);
    localStorage.setItem('refresh_token', tokens.refresh_token);
  }

  removeUserToken() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }

  hasUserToken(): boolean {
    return Boolean(localStorage.getItem('access_token'));
  }

  getUserToken(): UserToken {
    return {
      access_token: localStorage.getItem('access_token'),
      refresh_token: localStorage.getItem('refresh_token'),
    };
  }
}
