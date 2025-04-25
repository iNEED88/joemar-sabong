import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { JwtService } from 'src/app/services/jwt.service';
import { UserSub } from 'src/app/services/subscriptions/user.sub';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-commission-logs',
  templateUrl: './commission-logs.component.html',
  styleUrls: ['./commission-logs.component.scss'],
})
export class CommissionLogsComponent implements OnInit {
  // Pagination data from response
  totalCount: number = 0;
  pageNumber: number = 1;
  pageSize: number = 5;
  totalPages: number = 0;
  totalItems: number = 0;

  isLoading: boolean = false;
  history: any = [];
  constructor(
    private _api: ApiService,
    private _sub: UserSub,
    private _jwt: JwtService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getCommissions();



  }

  async getCommissions(page: number = 1): Promise<void> {
    this.isLoading = true;
    try {
      const res: any = await this._api.get('points', `/commission?pageNumber=${page}&pageSize=${this.pageSize}`);
      this.history = res.records || [];
      this.totalCount = res.totalCount;
      this.pageNumber = res.pageNumber;
      this.pageSize = res.pageSize;
      this.totalPages = res.totalPages;
      this.totalItems = res.totalCount;
      this.isLoading = false;
    } catch (err) {
      console.error('Error fetching data:', err);
      this.isLoading = false;
    } finally {
      this.isLoading = false;
    }
  }
  onPageSizeChange(event: any): void {
    this.pageSize = +event.target.value;
    this.pageNumber = 1;
    this.getCommissions();
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.getCommissions(page);
    }
  }

  getShowingRangeEnd(): number {
    return Math.min(this.pageNumber * this.pageSize, this.totalItems);
  }
}
