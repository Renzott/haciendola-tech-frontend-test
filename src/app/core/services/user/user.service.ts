import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, of } from 'rxjs';
import { HttpTokenResponse, HttpUserResponse } from '../../../shared/models/HttpResponse';
import { ApiKeyService } from '../localStorage/apiKey/api-key.service';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedEvent$ = new BehaviorSubject<boolean>(false);
  logged$ = this.loggedEvent$.asObservable();

  constructor(private http: HttpClient, private apiKeyService: ApiKeyService) {
    this.apiKeyService.token$.subscribe((key) => {
      this.loggedEvent$.next(key != null);
    });
  }

  login(email: string, password: string): Observable<HttpTokenResponse | null> {
    return this.http.post<HttpTokenResponse>(`${environment.API_URL}/login`, { email, password }).pipe(
      catchError(error => {
        return of(error.error);
      })
    );
  }
  resetPassword(email: string, username: string, password: string, confirmPassword: string): Observable<HttpUserResponse | null> {
    return this.http.put<HttpTokenResponse>(`${environment.API_URL}/resetpassword`, { email, username, password, confirmPassword }).pipe(
      catchError(error => {
        return of(error.error);
      })
    );
  }

  logout() {
    this.loggedEvent$.next(false);
  }

  setLogged() {
    this.loggedEvent$.next(true);
  }
}
