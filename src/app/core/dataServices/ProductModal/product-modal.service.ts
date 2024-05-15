import { Injectable } from "@angular/core";
import { Product } from "../../../shared/models/Product";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class ProductModalService {

    private openModalSubject$ = new BehaviorSubject<boolean>(false);
    openModal$ = this.openModalSubject$.asObservable();
    
    private productModalSubject$ = new BehaviorSubject<Product>({} as Product);
    productModal$ = this.productModalSubject$.asObservable();

    constructor() {}

    updateProductModal(product: Product) {
      this.productModalSubject$.next(product);
    }

    modalVisibility(value: boolean) {
        this.openModalSubject$.next(value);
    }
  }