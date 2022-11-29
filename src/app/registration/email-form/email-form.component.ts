import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { TwoFactorAuthenticationService } from 'src/app/services/common-service/two-fa-authentication.service';

@Component({
  selector: 'email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent implements OnInit, OnDestroy {

  @Output() continue = new EventEmitter();

  isLoading = false;
  email = '';
  apiCall: Subscription;

  constructor(private route: ActivatedRoute, private twoFaAuth: TwoFactorAuthenticationService) {
  }

  ngOnInit(): void {
    const emailFromQuery = this.route.snapshot.queryParams['Email'];
    if (!!emailFromQuery) {
      this.email = emailFromQuery;
    }
  }

  ngOnDestroy() {
    // this.apiCall.unsubscribe();
  }

  submit() {
    this.isLoading = true;
    this.apiCall = this.twoFaAuth.email2fa(this.email).subscribe({
      next: (data) => {
        console.log(data);
        this.continue.emit(this.email);
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
      }
    })

  }
}
