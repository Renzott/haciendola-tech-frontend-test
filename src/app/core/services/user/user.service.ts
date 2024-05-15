import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpTokenResponse } from '../../../shared/models/HttpResponse';
import { ApiKeyService } from '../localStorage/apiKey/api-key.service';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private endpoint = `${environment.API_URL}/login`;

  private loggedEvent$ = new BehaviorSubject<boolean>(false);
  logged$ = this.loggedEvent$.asObservable();

  constructor(private http: HttpClient, private apiKeyService: ApiKeyService) { 
    this.apiKeyService.token$.subscribe((key) => {
      this.loggedEvent$.next(key != null);
    });
  }

  login(email: string, password: string): Observable<HttpTokenResponse> {
    return this.http.post<HttpTokenResponse>(this.endpoint, { email, password });
  }

  logout() {
    this.loggedEvent$.next(false);
  }

  setLogged() {
    this.loggedEvent$.next(true);
  }
}
