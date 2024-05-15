import { Component } from '@angular/core';
import { UserService } from '../../core/services/user/user.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiKeyService } from '../../core/services/localStorage/apiKey/api-key.service';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, InputTextModule, ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm = this.formBuilder.group({
    email: '',
    password: ''
  });

  constructor(private userService: UserService, private formBuilder: FormBuilder, private apiKeyService: ApiKeyService, private messageService: MessageService, private route: Router) { }

  onSubmit(): void {
    
    const { email = "", password = "" } = this.loginForm.value;
    if (!email || !password) {      
      return;
    }

    this.userService.login(email, password).subscribe((data) => {
        if (data.token) {
          this.apiKeyService.setApiKey(data.token);
          this.messageService.add({severity:'success', summary:'Inicio de sesión exitoso', detail:'Bienvenido a Haciendola Prueba Tech.'});
          this.userService.setLogged();
          this.route.navigate(['/dashboard']);
        } else {
          this.loginForm.patchValue({
            password: ""
          });
          this.messageService.add({severity:'error', summary:'Credenciales incorrectas', detail:'Por favor, verifica tus credenciales.'});
        }
    });
    
  }

}
