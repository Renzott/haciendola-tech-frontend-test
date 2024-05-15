import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewProductModalService {

  private openModalSubject$ = new BehaviorSubject<boolean>(false);
  openModal$ = this.openModalSubject$.asObservable();

  constructor() { }

  modalVisibility(value: boolean) {
    this.openModalSubject$.next(value);
  }
  
}
