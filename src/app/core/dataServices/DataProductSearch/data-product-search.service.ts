import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { ProductService } from '../../services/product/product.service';
import { HttpProductResponse } from '../../../shared/models/HttpResponse';

@Injectable({
  providedIn: 'root'
})
export class DataProductSearchService {

  private searchDataSubject$ = new BehaviorSubject<string>('');
  searchData$ = this.searchDataSubject$.asObservable();

  private productsDataResultSubject$ = new BehaviorSubject<HttpProductResponse | null>({ data: [], status: 0 });
  searchDataResults$ = this.productsDataResultSubject$.asObservable();

  constructor(private productService: ProductService) {
    this.searchData$.pipe(
      debounceTime(500),
      switchMap((searchTerm) => this.productService.searchProducts(searchTerm))
    ).subscribe(response => {
      this.productsDataResultSubject$.next(response);
    })
  }

  updateSearchData(query: string) {
    this.searchDataSubject$.next(query);
  }

  refreshSearchData() {
    this.searchDataSubject$.next(this.searchDataSubject$.value);
  }

}
