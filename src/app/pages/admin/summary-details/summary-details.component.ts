import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { UserAccount, UserModel } from 'src/app/services/models/user.model';
import { UserSub } from 'src/app/services/subscriptions/user.sub';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-summary-details',
  templateUrl: './summary-details.component.html',
  styleUrl: './summary-details.component.scss'
})
export class SummaryDetailsComponent {

  model: any = {
    "totalAgentsPoints": 0,
    "totalPlayerPoints": 0,
    "totalAgentCommission": 0,
    "totalDrawbets": 0,
    "totalPlayers": 0,
    "decimal": 0
  };

  constructor(private _userSub: UserSub, private _api: ApiService) { }

  ngOnInit(): void {
    this.getSummaryDetails();

  }
  async getSummaryDetails() {
    try {
      const result: any = await this._api.get('admin');
      this.model = result;
    } catch (e) { }
  }
}
