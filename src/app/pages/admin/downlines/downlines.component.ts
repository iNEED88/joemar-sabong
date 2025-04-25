import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { UserModel } from 'src/app/services/models/user.model';
import { UserSub } from 'src/app/services/subscriptions/user.sub';


import { ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-downlines',
  templateUrl: './downlines.component.html',
  styleUrls: ['./downlines.component.scss'],
})
export class DownlinesComponent implements OnInit {

  totalCount: number = 0;
  pageNumber: number = 1;
  pageSize: number = 10;
  totalPages: number = 0;
  totalItems: number = 0;

  users: any = [];
  isLoading: boolean = false;
  dtTrigger: Subject<any> = new Subject();
  constructor(private _api: ApiService, private _sub: UserSub) { }

  ngOnInit(): void {


    this.getDownlines();
  }

  async getDownlines(page: number = 1): Promise<void> {
    this.isLoading = true;
    try {
      const response: any = await this._api.get('user', `/agent/downlines?pageNumber=${page}&pageSize=${this.pageSize}`);
      this.users = response.records || [];
      this.totalCount = response.totalCount;
      this.pageNumber = response.pageNumber;
      this.pageSize = response.pageSize;
      this.totalPages = response.totalPages;
      this.totalItems = response.totalCount

    } catch (err) {
      console.error('Error fetching data:', err);
    } finally {
      this.isLoading = false;
    }
  }

  onPageSizeChange(event: any): void {
    this.pageSize = +event.target.value;
    this.pageNumber = 1;
    this.getDownlines();
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.getDownlines(page);
    }
  }

  getShowingRangeEnd(): number {
    return Math.min(this.pageNumber * this.pageSize, this.totalItems);
  }

  async deactivateUser(userId: string) {
    try {
      const response: any = await this._api.post(
        'user',
        { userId },
        '/deactivate'
      );
      await this.getDownlines();
      alert('Success ! Player has been Deactivated');
    } catch (e) { }
  }

  public getUser(): Observable<UserModel> {
    return this._sub.getUser();
  }

  async setComs(userId: string, typeCommission: string) {

    if (typeCommission == 'sabong') {
      try {
        const percentage = prompt('Please input percentage.');
        if (percentage) {
          const response: any = await this._api.post(
            'user',
            { userId, percentage },
            '/set-coms'
          );
          await this.getDownlines();
          alert('Success');
        }
      } catch (e) {
        alert(e ?? 'Something went wrong');
      }
    }
    else if (typeCommission == 'ez2') {
      try {
        const percentage = prompt('Please input percentage.');
        if (percentage) {
          const response: any = await this._api.post(
            'user',
            { userId, percentage },
            '/set-coms-pick2'
          );
          await this.getDownlines();
          alert('Success');
        }
      } catch (e) {
        alert(e ?? 'Something went wrong');
      }
    }

    else if (typeCommission == 'pick3') {
      try {
        const percentage = prompt('Please input percentage.');
        if (percentage) {
          const response: any = await this._api.post(
            'user',
            { userId, percentage },
            '/set-coms-pick3'
          );
          await this.getDownlines();
          alert('Success');
        }
      } catch (e) {
        alert(e ?? 'Something went wrong');
      }
    }
    else if (typeCommission == 'gameending') {
      try {
        const percentage = prompt('Please input percentage.');
        if (percentage) {
          const response: any = await this._api.post(
            'user',
            { userId, percentage },
            '/set-coms-game-ending'
          );
          await this.getDownlines();
          alert('Success');
        }
      } catch (e) {
        alert(e ?? 'Something went wrong');
      }
    }
    else if (typeCommission == 'suertres') {
      try {
        const percentage = prompt('Please input percentage.');
        if (percentage) {
          const response: any = await this._api.post(
            'user',
            { userId, percentage },
            '/set-coms-suertres'
          );
          await this.getDownlines();
          alert('Success');
        }
      } catch (e) {
        alert(e ?? 'Something went wrong');
      }
    }
  }


  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
