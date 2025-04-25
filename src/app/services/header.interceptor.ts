import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { JwtService } from './jwt.service';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  token: string | null = '';
  constructor(private _jwt: JwtService, private _router: Router) {
    this._jwt.getToken().subscribe((token) => {
      console.log(token);
      this.token = token;
    });
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      headers: request.headers.set('Authorization', 'Bearer ' + this.token),
    });

    return next.handle(request).pipe(
      catchError((err): Observable<any> => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this._jwt.removeToken();
            this._router.navigate(['/play/login']);
          }
          if (err.error && err.error.message) {
            return throwError(() => new Error(err.error.message));
          }
          return throwError(() => new Error('Something went wrong'));
        } else {
          return throwError(() => new Error(err));
        }
      })
    );
  }
}
