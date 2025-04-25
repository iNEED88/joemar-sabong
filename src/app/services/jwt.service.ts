import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

const tokenExist = localStorage.getItem('accessToken') || '';

interface DecodedToken {
  type: string;
  role: string;
  username: string;
  name: string;
  [key: string]: any;
}

@Injectable()
export class JwtService {
  constructor() {
    this.decodeToken();
  }

  public decodedToken$: BehaviorSubject<DecodedToken | null> = new BehaviorSubject<DecodedToken | null>(null);
  public accessToken$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(tokenExist);
  public points$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  public setToken(token: string): void {
    console.log('setting token', token);
    localStorage.setItem('accessToken', token);
    this.accessToken$.next(token);
    this.decodeToken();
  }

  public setPoints(value: number): void {
    this.points$.next(value);
  }

  public getPoints(): Observable<number> {
    return this.points$.asObservable();
  }

  public getToken(): Observable<string | null> {
    return this.accessToken$.asObservable();
  }

  public getDecodedToken(): Observable<DecodedToken | null> {
    return this.decodedToken$.asObservable();
  }

  public decodeToken(): DecodedToken | null {
    console.log('decoding token');
    const token = localStorage.getItem('accessToken') || '';
    if (!token) return null;

    try {
      const decodedToken: DecodedToken = jwtDecode(token);
      console.log(decodedToken);
      this.decodedToken$.next(decodedToken);
      return decodedToken;
    } catch (err) {
      console.error('Failed to decode token:', err);
      this.decodedToken$.next(null);
      return null;
    }
  }

  public removeToken(): void {
    localStorage.clear();
    this.decodedToken$.next({ type: '', role: '', username: '', name: '' });
    this.accessToken$.next('');
  }
}
