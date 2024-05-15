import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { DataProductSearchService } from '../../../core/dataServices/DataProductSearch/data-product-search.service';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { NewProductModalService } from '../../../core/dataServices/NewProductModal/new-product-modal.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [InputTextModule, IconFieldModule, InputIconModule, ButtonModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent implements OnDestroy {

    labelDesktop = "Nuevo producto";

    constructor(private dataService: DataProductSearchService, private modalService: NewProductModalService){ 
      if (this.isMobileWindow(window.innerWidth)) {
        this.labelDesktop = "";
      }
    }

    onSearch(event: Event){
      const query = (event.target as HTMLInputElement).value || '';
      this.dataService.updateSearchData(query);
    }

    ngOnDestroy(): void {
      this.dataService.updateSearchData('');
    }

    showNewProductModal() {
      this.modalService.modalVisibility(true);
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      if (this.isMobileWindow(event.target.innerWidth)) {
        this.labelDesktop = "";
      }else {
        this.labelDesktop = "Nuevo producto";
      }
    }

    private isMobileWindow(width: number): boolean {
      return width <= 1280;
    }
}
