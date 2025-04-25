import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss', '../../../../assets/css/style_creds.css']
})
export class SignupComponent implements OnInit {
  model: any = {};
  isLoading: boolean = false;
  messageErrorTrue: boolean = false;
  successMessageTrue: boolean = false;
  message: any = [];
  signupBtnKLabel: string = "Signup";
  constructor(
    private _api: ApiService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
    this._route.queryParams.subscribe((params) => {
      this.model.refCode = params['ref'];
    });
  }

  ngOnInit() {
  }

  async register(): Promise<any> {
    this.message = [];
    this.isLoading = true;
    this.messageErrorTrue = false;
    this.signupBtnKLabel = "Please wait...";

    if (!this.model.username) {

      this.message.push('Username is required');
      this.messageErrorTrue = this.messageErrorTrue || true;
      this.isLoading = false;
      this.signupBtnKLabel = "Signup";

    }
    if (!this.model.password) {

      this.message.push('Password is required');
      this.messageErrorTrue = this.messageErrorTrue || true;
      this.isLoading = false;
      this.signupBtnKLabel = "Signup";
    }
    else {
      if (this.model.password != this.model.confirmPassword) {
        this.message.push('Password do not match.')
        this.messageErrorTrue = this.messageErrorTrue || true;
        this.isLoading = false;
        this.signupBtnKLabel = "Signup";
      }
    }

    if (!this.messageErrorTrue) {
      this.model.username = this.model.username.trim();
      try {
        const result: any = await this._api.post('auth', this.model, '/register');
        this.message.push("Exciting update! Your account registration on our platform is now complete. Over the next 24 hours, our team will meticulously examine your account information for verification purposes. Once this process is finalized, you'll be able to log in right away.");
        this.isLoading = false;
        this.signupBtnKLabel = "Signup";
        setTimeout(() => {
          this._router.navigate(['/auth/login']);
        }, 10000);

      } catch (e: any) {
        if (e) {
          // alert(e ?? 'Something went wrong');
          this.messageErrorTrue = true;
          if (e == 'Something went wrong') {
            this.message.push(e)
          }
          else {
            this.message.push(e)
          }
        }
        this.isLoading = false;
        this.signupBtnKLabel = "Signup";
      }
    }

  }
}
