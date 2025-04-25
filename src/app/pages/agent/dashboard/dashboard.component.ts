import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { JwtService } from 'src/app/services/jwt.service';
import { UserAccount, UserModel } from 'src/app/services/models/user.model';
import { UserSub } from 'src/app/services/subscriptions/user.sub';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  commissionConfig: any = {};
  commissionDetails: any = {};
  constructor(
    private _userSub: UserSub,
    private _api: ApiService,
    private _jwt: JwtService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    // this.getCommissionDetails();
  }


  public getUser(): Observable<UserModel> {
    return this._userSub.getUser();
  }

  public getAccount(): Observable<UserAccount> {
    return this._userSub.getUserAccount();
  }

  getFlooredValue(): Observable<number> {
    return this.getAccount().pipe(
      map(userAccount => {
        const accumulatedComs = userAccount?.accumulatedComs || 0;
        return Math.floor(accumulatedComs / 5000);
      })
    );
  }


  // async getCommissionDetails() {
  //   const response: any = await this._api.get('user', '/commission-details');
  //   this.commissionDetails = response;
  // }

  copyToClipboard(inputElement: any) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
    alert('copied !');
  }



}
