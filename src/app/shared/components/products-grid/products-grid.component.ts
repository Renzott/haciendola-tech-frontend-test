import { Component, OnInit } from '@angular/core';
import { DataProductSearchService } from '../../../core/dataServices/DataProductSearch/data-product-search.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-grid.component.html',
  styleUrl: './products-grid.component.scss'
})
export class ProductsGridComponent implements OnInit{

  constructor(private dataService: DataProductSearchService){ }

  ngOnInit(): void {
      this.dataService.searchDataResults$.subscribe((data) => {
        console.log(data);
      });
  }
}
