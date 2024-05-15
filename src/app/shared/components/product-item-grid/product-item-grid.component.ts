import { Component, Input } from '@angular/core';
import { Product } from '../../models/Product';

import { DialogModule } from 'primeng/dialog';
import { ProductModalService } from '../../../core/dataServices/ProductModal/product-modal.service';

@Component({
  selector: 'app-product-item-grid',
  standalone: true,
  imports: [],
  templateUrl: './product-item-grid.component.html',
  styleUrl: './product-item-grid.component.scss'
})
export class ProductItemGridComponent {
  @Input() product: Product = {} as Product;
  visible = false;

  constructor(private modalService: ProductModalService) {
    this.product.image;
  }

  showProductDialog() {
    this.modalService.modalVisibility(true);
    this.modalService.updateProductModal(this.product);
  }
}
