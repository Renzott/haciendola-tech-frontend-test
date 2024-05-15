import { Injectable, Signal, WritableSignal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiKeyService {

  private key: string = 'apikey';
  private tokenSubject: BehaviorSubject<string | null>;
  public token$: Observable<string | null>;

  constructor() {
    const storedToken = localStorage.getItem(this.key);
    this.tokenSubject = new BehaviorSubject<string | null>(storedToken);
    this.token$ = this.tokenSubject.asObservable();
  }
  
  setApiKey(token: string): void {
    localStorage.setItem(this.key, token);
    this.tokenSubject.next(token);
  }

  removeApiKey(): void {
    localStorage.removeItem(this.key);
    this.tokenSubject.next(null);
  }

  getApiKey(): string | null {
    return this.tokenSubject.value;
  }
}
