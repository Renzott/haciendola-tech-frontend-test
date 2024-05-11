import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { ProductService } from '../../services/product/product.service';

@Injectable({
  providedIn: 'root'
})
export class DataProductSearchService {

  private searchDataSubject = new BehaviorSubject<string>('');
  searchData$ = this.searchDataSubject.asObservable();

  private productsDataResultSubject$ = new BehaviorSubject<any[]>([]);
  searchDataResults$ = this.productsDataResultSubject$.asObservable();

  constructor(private productService: ProductService) {
    this.searchData$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((searchTerm) => this.productService.searchProducts(searchTerm))
    ).subscribe(data => {
      console.log(data);
      this.productsDataResultSubject$.next(data.data);
    })
  }

  updateSearchData(data: string) {
    this.searchDataSubject.next(data);
  }
}
