import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

let apikey = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvb3RAbWFpbC5jb20iLCJwYXNzd29yZCI6ImExZTNkYTNiMjZiMGFmNTIwMTlkNmNiYWUyYTBhNDAzOmFkZmI5ZWY0Y2M5OTg1Y2RiNDc0Yjc5YmE5MTdmZjZkOjIwNWE0NTEwMjA2ZGE0NTY2ODA4Zjg4ODc0M2YiLCJpYXQiOjE3MTUyOTg4Njl9.-2qZeoqPiCJmA7p-NSE4-beOztuEYy1uiHWoBeJT6y4`

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiURL = "http://localhost:3000/api/v1/products/search";

  constructor(private http: HttpClient) { }
  searchProducts(query: string): Observable<any> {
    return this.http.get(`${this.apiURL}?q=${query}`, {
      headers: {
        Authorization: apikey
      }
    });
  }
}
