import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-arena-list',
  templateUrl: './arena-list.component.html',
  styleUrls: ['./arena-list.component.scss'],
})
export class ArenaListComponent implements OnInit {
  isLoading: boolean = false;
  // Pagination data from response
  totalCount: number = 0;
  pageNumber: number = 1;
  pageSize: number = 5;
  totalPages: number = 0;
  totalItems: number = 0;
  results: any = [];
  model: any = {};
  dtTrigger: Subject<any> = new Subject();
  currentEvent: any = {};
  constructor(private _api: ApiService) { }

  ngOnInit(): void {

    this.getReports();
  }

  async getReports(page: number = 1): Promise<void> {
    try {
      const res: any = await this._api.get('betopsnew', `/events?pageNumber=${page}&pageSize=${this.pageSize}`);
      this.results = res.records || [];
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
    this.getReports();
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.getReports(page);
    }
  }

  getShowingRangeEnd(): number {
    return Math.min(this.pageNumber * this.pageSize, this.totalItems);
  }

  async editEvent() {
    let newEventData: any = {};
    newEventData = {
      name: this.currentEvent.name,
      leftName: this.currentEvent.leftName,
      rightName: this.currentEvent.rightName,
      rightColor: this.currentEvent.rightColor,
      leftColor: this.currentEvent.leftColor,
      plasada: this.currentEvent.plasada,
      videoUrl: this.currentEvent.videoUrl,
      status: this.currentEvent.status,
      id: this.currentEvent.id,
    };

    try {
      const response: any = await this._api.put(
        'betopsnew',
        this.currentEvent,
        '/events'
      );
      await this.getReports();

      alert('Success');
    } catch (e) {
      alert(e);
    }
  }

  async duplicateEvent() {
    try {
      const response: any = await this._api.post(
        'betopsnew',
        this.currentEvent,
        '/events'
      );
      this.currentEvent = {};
      await this.getReports();

      alert('Success !');
    } catch (e) {
      alert(e);
    }
  }

  async addEvent() {
    try {
      const response: any = await this._api.post(
        'betopsnew',
        { ...this.model },
        '/events'
      );
      this.model = {};
      await this.getReports();

      alert('Success !');
    } catch (e) {
      alert(e);
    }
  }


}
