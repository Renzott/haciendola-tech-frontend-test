import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product/product.service';
import { DataProductSearchService } from './dataServices/DataProductSearch/data-product-search.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ProductService, DataProductSearchService]
})
export class CoreModule { }
