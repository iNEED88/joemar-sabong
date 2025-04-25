import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { fixDecimalPlaces } from 'src/app/services/helper';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

  // Pagination data from response
  totalCount: number = 0;
  pageNumber: number = 1;
  pageSize: number = 10;
  totalPages: number = 0;
  totalItems: number = 0;


  users: any = [];
  isLoading: boolean = false;
  constructor(private _api: ApiService, private http: HttpClient) { }

  ngAfterViewInit() { }

  async changePass(id: string) {
    console.log(id);

    try {
      const state = prompt(`Please enter password`);
      if (state !== null) {
        await this._api.post(
          'admin',
          { id: id, password: state },
          '/changepass'
        );
        alert('Success');
      }
    } catch (e) {
      alert(e ?? 'Contact support');
    }
  }

  ngOnInit(): void {

    this.getUsers();


  }
  async getUsers(page: number = 1): Promise<void> {
    this.isLoading = true;
    try {
      const res: any = await this._api.get('admin', `/users?pageNumber=${page}&pageSize=${this.pageSize}`);
      this.users = res.records || [];
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
    this.getUsers();
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.getUsers(page);
    }
  }

  getShowingRangeEnd(): number {
    return Math.min(this.pageNumber * this.pageSize, this.totalItems);
  }



}
