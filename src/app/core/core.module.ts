import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product/product.service';
import { DataProductSearchService } from './dataServices/DataProductSearch/data-product-search.service';
import { ApiKeyService } from './services/localStorage/apiKey/api-key.service';
import { UserService } from './services/user/user.service';
import { ProductModalService } from './dataServices/ProductModal/product-modal.service';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    
  ],
  providers: [ProductService, DataProductSearchService, UserService, ProductModalService]
})
export class CoreModule { }
