import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthentificationService} from '../../src/app/services/authentification.service'
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';


export class TokenInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders().set('Authorization', token);
      const newReq = req.clone(
        {headers}
      );
      return next.handle(newReq);
    }
    return next.handle(req);
  }
}

export const AuthentificationInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptorService,
  multi: true
};
