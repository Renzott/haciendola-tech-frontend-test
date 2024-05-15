import { Component, OnInit } from '@angular/core';
import { ProductsGridComponent } from '../../shared/components/products-grid/products-grid.component';
import { SearchBarComponent } from '../../shared/components/search-bar/search-bar.component';
import { ModalProductComponent } from '../../shared/components/modal-product/modal-product.component';
import { ModalNewProductComponent } from '../../shared/components/modal-new-product/modal-new-product.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ProductsGridComponent, SearchBarComponent, ModalProductComponent, ModalNewProductComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  
  constructor() {}
  
}
