import { Component, OnInit } from '@angular/core';
import { NewProductModalService } from '../../../core/dataServices/NewProductModal/new-product-modal.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { MarkdownComponent } from 'ngx-markdown';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ProductService } from '../../../core/services/product/product.service';
import { MessageService } from 'primeng/api';
import config from '../../config';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-modal-new-product',
  standalone: true,
  imports: [DialogModule, CommonModule, MarkdownComponent, ButtonModule, InputTextareaModule, FormsModule, ReactiveFormsModule],
  templateUrl: './modal-new-product.component.html',
  styleUrl: './modal-new-product.component.scss'
})
export class ModalNewProductComponent implements OnInit {

  isModalVisible = false;
  isVisualMarkdown = false;

  private currentSKU = 0;

  newForm = this.formBuilder.group({
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

  constructor(private productService: ProductService, private modalService: NewProductModalService, private formBuilder: FormBuilder, private messageService: MessageService) { }

  ngOnInit(): void {
    this.modalService.openModal$.subscribe(result => {
      this.generateDataNewProduct();
      this.isModalVisible = result;
    });
  }

  closeModal(): void {
    this.modalService.modalVisibility(false);
    this.isVisualMarkdown = false;
  }

  generateDataNewProduct(): void {
    const newSKU = Math.floor(Math.random() * 899999999 + 100000000);
    this.currentSKU = newSKU;
    this.newForm.patchValue({ 
      sku: newSKU.toString(),
      handle: '',
      title: '',
      description: config.descriptionNewDefault,
      grams: 0,
      stock: 0,
      price: 0,
      comparePrice: 0,
      barcode: ''
    });
  }

  previewDescription(): void {
    this.isVisualMarkdown = !this.isVisualMarkdown;
  }

  updateProduct(): void {
    let newProductData = this.newForm.value as Product;
    newProductData.sku = String(this.currentSKU);
    
    if (!this.validateForm(newProductData)) {
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'Todos los campos son requeridos'});
      return;
    }

    this.productService.newProduct(newProductData).subscribe((data) => {
      if(data?.status === 200) {
        this.modalService.modalVisibility(false);
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Producto creado correctamente'});
      } else{
        this.messageService.add({severity: 'error', summary: 'Error', detail: data?.message});
      }
    });
  }

  validateForm(data: Product): boolean {
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        const element = data[key];
        if (element === '' || element === 0 || element === null) {
          return false;
        }
      }
    }
    return true;
  }

}
