import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewProductComponent } from './modal-new-product.component';

describe('ModalNewProductComponent', () => {
  let component: ModalNewProductComponent;
  let fixture: ComponentFixture<ModalNewProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalNewProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalNewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
