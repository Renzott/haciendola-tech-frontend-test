import { Component, Inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ApiKeyService } from '../../../core/services/localStorage/apiKey/api-key.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../core/services/user/user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonModule, RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  isLogged = false;

  constructor(private apiKeyService: ApiKeyService, private route: Router, private userService: UserService) {
    this.isLogged = this.apiKeyService.getApiKey() != "";
    
    this.userService.logged$.subscribe((value) => {
      this.isLogged = value;
    });
  }

  logout(): void {
    this.apiKeyService.removeApiKey();
    this.route.navigate(['/login']);
    this.userService.logout();
  }

}
