import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private hubConnection!: HubConnection;
  private isConnected$ = new BehaviorSubject<boolean>(false);

  constructor(private _jwt: JwtService) {
    this._jwt.getToken().subscribe((token) => {
      if (token) {
        this.startConnection(token);
      }
    });
  }

  private startConnection(token: string) {
    console.log(`Attempting to connect to SignalR with URL: ${environment.webSocketUrl} and Token: ${token}`);
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(`${environment.webSocketUrl}`, {
        accessTokenFactory: () => token,
        withCredentials: false // Include credentials with requests
      })
      .configureLogging(LogLevel.Information)
      .withAutomaticReconnect()
      .build();

    this.hubConnection
      .start()
      .then(() => {
        console.log('SignalR connected.');
        this.isConnected$.next(true);
      })
      .catch((err) => console.error('SignalR connection error: ', err));
  }


  listen<T>(eventName: string): Observable<T> {
    return new Observable<T>((subscriber) => {
      this.hubConnection.on(eventName, (data: T) => {
        subscriber.next(data);
      });
    });
  }

  emit(methodName: string, data: any): Promise<void> {
    return this.hubConnection.invoke(methodName, data).catch((err) => {
      console.error(`SignalR emit error for ${methodName}:`, err);
    });
  }

  disconnect(): void {
    this.hubConnection
      .stop()
      .then(() => {
        console.log('SignalR disconnected.');
        this.isConnected$.next(false);
      })
      .catch((err) => console.error('Error disconnecting SignalR:', err));
  }

  public getConnectionStatus(): Observable<boolean> {
    return this.isConnected$.asObservable();
  }
}
