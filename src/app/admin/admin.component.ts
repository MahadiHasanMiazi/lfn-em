import { Component, OnInit } from '@angular/core';
import { IDecodedJwtInterface } from '../models/interfaces/decoded-jwt.interface';
import { SidebarService } from '../services/common-service/sidebar.service';
import { JwtTokenParserService } from '../services/common-service/token/jwt-token-parser.service';
import { UserService } from '../services/common-service/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  sidebarCollapse: boolean = true;

  constructor(
    private sidebar: SidebarService,
    private userService: UserService,
    private decodeJwt: JwtTokenParserService
  ) {
    this.sidebar.isSidebarCollapsed.subscribe(
      (collapseState) => (this.sidebarCollapse = collapseState)
    );
  }

  ngOnInit(): void {
    const { email, userId }: IDecodedJwtInterface =
      this.decodeJwt.parseJwtToken();
    this.userService.getUserByEmail(email).subscribe({
      next: (response: any) => {
        this.userService.storeUserInfo(response.payload);
        // localStorage.setItem('organi')
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
