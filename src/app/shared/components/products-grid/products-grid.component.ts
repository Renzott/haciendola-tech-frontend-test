import { Component, HostListener, OnInit } from '@angular/core';
import { DataProductSearchService } from '../../../core/dataServices/DataProductSearch/data-product-search.service';
import { CommonModule } from '@angular/common';
import { ProductItemGridComponent } from '../product-item-grid/product-item-grid.component';
import { Product } from '../../models/Product';
import { PaginatorModule } from 'primeng/paginator';
import { ImageIterator } from '../../scripts';

@Component({
    selector: 'app-products-grid',
    standalone: true,
    imports: [CommonModule, ProductItemGridComponent, PaginatorModule],
    templateUrl: './products-grid.component.html',
    styleUrl: './products-grid.component.scss'
})
export class ProductsGridComponent implements OnInit {
    
    fisrt = 0;
    rows = 0;

    itemsPerPage = 8;
    totalRecords = 0;
    allProducts: Product[] = [];
    renderedProducts: Product[] = [];
    pageLinkSize: Number = 1;

    imageIterator: ImageIterator = new ImageIterator();


    constructor(private dataService: DataProductSearchService) { }

    ngOnInit(): void {
        this.dataService.searchDataResults$.subscribe((res) => {
            if (res === null) return;
            if (res.status === 200) {
                this.totalRecords = res.data.length;
                this.fisrt = 0;
                this.rows = this.itemsPerPage;
                
                this.allProducts = res.data.map((product: Product) => {
                    product.image = this.imageIterator.next();
                    return product;
                });
                
                this.renderedProducts = this.allProducts.slice(this.fisrt, this.rows);
            }
        });
        this.pageLinkSize = this.pageLinkSizeWindow(window.innerWidth);
    }

    onPageChange(event: any) {
        this.fisrt = Number.parseInt(event.first);
        this.rows = Number.parseInt(event.rows);

        this.renderedProducts = this.allProducts.slice(this.fisrt, this.fisrt + this.rows);        
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.pageLinkSize = this.pageLinkSizeWindow(event.target.innerWidth);
    }

    private pageLinkSizeWindow(width: number): number {
        if (width <= 340) {
            return 2;
        }

        if (width <= 480) {
            return 3;
        }

        if (width <= 600) {
            return 5;
        }

        if (width <= 800) {
            return 7;
        }

        if (width <= 1200) {
            return 9;
        }
        return 11;
    }

}
