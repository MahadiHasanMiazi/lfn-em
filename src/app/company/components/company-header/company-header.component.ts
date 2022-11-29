import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'company-header',
  templateUrl: './company-header.component.html',
  styleUrls: ['./company-header.component.scss']
})
export class CompanyHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  myAccPage() {
    this.router.navigate(["/admin/panel/my-account"])
  }
  logOut() {
    this.router.navigate(["../login"]);
  }

  settingsPage() {
    this.router.navigate(["/admin/panel/settings"])
  }

}
