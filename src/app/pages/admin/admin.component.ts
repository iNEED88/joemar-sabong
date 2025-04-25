import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { JwtService } from 'src/app/services/jwt.service';
import { UserAccount, UserModel } from 'src/app/services/models/user.model';
import { UserSub } from 'src/app/services/subscriptions/user.sub';
import { environment } from 'src/environments/environment';
import { WebSocketService } from 'src/app/services/web-socket-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, AfterViewInit {
  connectionStatus: boolean = false;
  private sub: Subscription = new Subscription();
  constructor(
    private _api: ApiService,
    private _userSub: UserSub,
    private _jwt: JwtService,
    private _router: Router,
    private webSocketService: WebSocketService,
  ) { }

  ngOnInit(): void {
    this._userSub.getUserDetail();
    // ✅ Listen for SignalR connection status
    this.webSocketService.getConnectionStatus().subscribe((connected: boolean) => {
      this.connectionStatus = connected;
      console.log('SignalR connection status:', connected);
    });


    // ✅ Listen for a test event from the backend
    this.webSocketService.listen<any>('ReceiveMessage').subscribe((data) => {
      console.log('Received test-event:', data);
    });


  }
  public getUserInfo(): Observable<UserModel> {
    return this._userSub.getUser();
  }

  sendTestMessage() {
    const testPayload = { message: 'Hello from AdminComponent!' };
    this.webSocketService.emit('ReceiveMessage', testPayload);
  }

  ngAfterViewInit(): void {
    this.loadScript('assets/js/icons/feather-icon/feather.min.js');
    this.loadScript('assets/js/icons/feather-icon/feather-icon.js');
    this.loadScript('assets/js/scrollbar/simplebar.min.js');
    this.loadScript('assets/js/scrollbar/custom.js');
    this.loadScript('assets/js/config.js');
    this.loadScript('assets/js/sidebar-menu.js');
    this.loadScript('assets/js/sidebar-pin.js');
    this.loadScript('assets/js/slick/slick.min.js');
    this.loadScript('assets/js/slick/slick.js');
    this.loadScript('assets/js/header-slick.js');
    this.loadScript('assets/js/prism/prism.min.js');
    this.loadScript('assets/js/script.js');
    this.loadScript('assets/js/script1.js');
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  public getUser(): Observable<UserModel> {
    return this._userSub.getUser();
  }

  logout() {
    this.closeSideBar();
    this._jwt.removeToken();
    this._userSub.setUser({});
    this._userSub.setAccount({});
    this._router.navigate(['/play/login']);
  }

  closeSideBar() {

    console.log('here');
    var htmlElement = document.querySelector('html');
    htmlElement?.classList.remove('sidebar-left-opened');
  }
}
