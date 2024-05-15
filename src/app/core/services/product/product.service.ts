import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, switchMap, throwError } from 'rxjs';
import { HttpCommonResponse, HttpProductResponse, HttpPutProductResponse } from '../../../shared/models/HttpResponse';
import { ApiKeyService } from '../localStorage/apiKey/api-key.service';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private endpoint = environment.API_URL;

  constructor(private http: HttpClient, private apiKeyService: ApiKeyService) { }

  newProduct(data: any): Observable<HttpCommonResponse | null> {
    return this.apiKeyService.token$.pipe(
      switchMap(token => {
        if (token) {
          return this.http.post<HttpCommonResponse>(`${this.endpoint}/product`, data, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }).pipe(
            catchError(error => {
              return of(error.error);
            })
          );
        } else {
          return of(null);
        }
      })
    );
  }

  searchProducts(query: string): Observable<HttpProductResponse | null> {
    return this.apiKeyService.token$.pipe(
      switchMap(token => {
        if (token) {
          return this.http.get<HttpProductResponse>(`${this.endpoint}/products/search?q=${query}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }).pipe(
            catchError(error => {
              return of(null);
            })
          );
        } else {
          return of(null);
        }
      })
    );
  }

  deleteProduct(id: string): Observable<HttpCommonResponse | null> {
    return this.apiKeyService.token$.pipe(
      switchMap(token => {
        if (token) {
          return this.http.delete<HttpCommonResponse>(`${this.endpoint}/product/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }).pipe(
            catchError(error => {
              return of(error.error);
            })
          );
        } else {
          return of(null);
        }
      })
    );
  }

  updateProduct(data: any): Observable<HttpPutProductResponse | null> {
    return this.apiKeyService.token$.pipe(
      switchMap(token => {
        if (token) {
          return this.http.put<HttpPutProductResponse>(`${this.endpoint}/product`, data, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }).pipe(
            catchError(error => {
              return of(error.error);
            })
          );
        } else {
          return of(null);
        }
      })
    );
  }
}
