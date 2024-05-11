import { Component } from '@angular/core';
import { DataProductSearchService } from '../../../core/dataServices/DataProductSearch/data-product-search.service';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [InputTextModule, IconFieldModule, InputIconModule, ButtonModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
    constructor(private dataService: DataProductSearchService){ }

    onSearch(event: Event){
      const query = (event.target as HTMLInputElement).value || '';
      this.dataService.updateSearchData(query);
    }
}
