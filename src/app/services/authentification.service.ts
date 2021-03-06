import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const API_LINK_AUTH = 'https://immense-citadel-91115.herokuapp.com/api/Users/login';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(API_LINK_AUTH,credentials);
  
  }
  logout() {
    localStorage.removeItem('token');
  }
  isAutheticated() {
    return !!localStorage.getItem('token');
  }
}
