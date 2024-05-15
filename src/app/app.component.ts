import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalProductComponent } from './shared/components/modal-product/modal-product.component';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';;
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterOutlet, RouterLink, HttpClientModule, CoreModule, NavbarComponent, ToastModule, MessagesModule, MessageModule],
})
export class AppComponent {
  title = 'haciendola-tech-frontend-test';
}
