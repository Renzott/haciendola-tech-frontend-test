import { TestBed } from '@angular/core/testing';

import { DataProductSearchService } from './data-product-search.service';

describe('DataProductSearchService', () => {
  let service: DataProductSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataProductSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
