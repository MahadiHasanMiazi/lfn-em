import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { TokensService } from 'src/app/services/tokens.service';

@Component({
  selector: 'admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss'],
})
export class AdminHeaderComponent implements OnInit {
  constructor(
    private router: Router,
    private readonly tokenService: TokensService,
    private readonly toast: HotToastService
  ) {}

  ngOnInit(): void {}

  myAccPage() {
    this.router.navigate(['/admin/panel/my-account']);
  }

  logOut() {
    this.tokenService.removeUserToken();
    this.router.navigate(['../login']);
  }

  settingsPage() {
    this.router.navigate(['/admin/panel/settings']);
  }
}
