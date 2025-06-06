import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { UserModel } from 'src/app/services/models/user.model';

import { UserSub } from 'src/app/services/subscriptions/user.sub';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrl: './list-events.component.scss'
})
export class ListEventsComponent {

  // Pagination data from response
  totalCount: number = 0;
  pageNumber: number = 1;
  pageSize: number = 5;
  totalPages: number = 0;
  totalItems: number = 0;
  selectedFight: string = '';
  events: any = [];
  isLoading: boolean = false;
  constructor(
    private _sub: UserSub,
    private _api: ApiService,
    private _router: Router
  ) { }

  ngOnInit(): void {


    this.getEvents();
  }
  getFightNumberDetails() {
    console.log(this.selectedFight)

    if (this.selectedFight == "") {
      alert("Please select a fight #!");
      return;
    }


    this._router.navigate(['/admin/fight-details', this.selectedFight]);

  }
  async getEvents(page: number = 1): Promise<void> {
    this.isLoading = true;
    try {
      const res: any = await this._api.get('admin', `/events?pageNumber=${page}&pageSize=${this.pageSize}`);
      this.events = res.records || [];
      this.totalCount = res.totalCount;
      this.pageNumber = res.pageNumber;
      this.pageSize = res.pageSize;
      this.totalPages = res.totalPages;
      this.totalItems = res.totalCount
    } catch (err) {
      console.error('Error fetching data:', err);
    } finally {
      this.isLoading = false;
    }
  }

  onPageSizeChange(event: any): void {
    this.pageSize = +event.target.value;
    this.pageNumber = 1;
    this.getEvents();
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.getEvents(page);
    }
  }

  getShowingRangeEnd(): number {
    return Math.min(this.pageNumber * this.pageSize, this.totalItems);
  }


  async approveUser(userId: string) {
    this.isLoading = true;
    const state = confirm(`Approved this account?`);
    if (!state) {
      this.isLoading = false;
      return;
    }
    try {

      const response: any = await this._api.post(
        'user',
        { userId },
        '/approve'
      );
      await this.getEvents();
      alert('Success ! User Approved.');
      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
      alert(e ?? 'Server Error');
    }
  }

  async rejectUser(userId: string) {
    try {
      this.isLoading = true;
      const response: any = await this._api.post('user', { userId }, '/reject');
      await this.getEvents();
      this.isLoading = false;
      alert('Success ! User Rejected');
    } catch (e) {
      this.isLoading = false;
      alert(e ?? 'Server Error');
    }
  }

  public getUser(): Observable<UserModel> {
    return this._sub.getUser();
  }

}
