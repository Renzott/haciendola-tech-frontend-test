import { Component, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ProductModalService } from '../../../core/dataServices/ProductModal/product-modal.service';
import { ButtonModule } from 'primeng/button';
import { Product } from '../../models/Product';
import { CommonModule } from '@angular/common';
import { MarkdownComponent } from 'ngx-markdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../../core/services/product/product.service';
import { DataProductSearchService } from '../../../core/dataServices/DataProductSearch/data-product-search.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-modal-product',
  standalone: true,
  imports: [DialogModule, CommonModule, MarkdownComponent, ButtonModule, InputTextareaModule, FormsModule, ReactiveFormsModule],
  templateUrl: './modal-product.component.html',
  styleUrl: './modal-product.component.scss'
})
export class ModalProductComponent implements OnInit {

  isModalVisible = false;
  isEditMode = false;
  product: Product = {} as Product;

  editForm = this.formBuilder.group({
    sku: '',
    handle: '',
    title: '',
    description: '',
    grams: 0,
    stock: 0,
    price: 0,
    comparePrice: 0,
    barcode: ''
  });

  constructor(private modalService: ProductModalService, private formBuilder: FormBuilder, private productService: ProductService, private dataProductSearchService: DataProductSearchService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.modalService.openModal$.subscribe(result => {
      this.isModalVisible = result;
    });

    this.modalService.productModal$.subscribe(result => {
      this.product = result;
      this.editForm.patchValue(result);
    });
  }

  closeModal(): void {
    this.isModalVisible = false;
    this.isEditMode = false;
    this.modalService.modalVisibility(false);
  }

  deleteProduct(): void {
    this.productService.deleteProduct(this.product.sku).subscribe((data) => {
      if(data?.status === 200) {
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Producto Eliminado'});
        this.closeModal();
        this.dataProductSearchService.refreshSearchData();
      } else{
        this.messageService.add({severity: 'error', summary: 'Error', detail: data?.message});
      }
    });
  }

  updateProduct(): void {
    this.productService.updateProduct(this.editForm.value).subscribe((data) => {
      if(data?.status === 200) {
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Producto Actualizado'});
        this.closeModal();
        this.dataProductSearchService.refreshSearchData();
      }else {
        this.messageService.add({severity: 'error', summary: 'Error', detail: data?.message});
      }
    });
  }

  cancelEdit(): void {
    this.isEditMode = false;
    this.editForm.patchValue(this.product);
  }
}
