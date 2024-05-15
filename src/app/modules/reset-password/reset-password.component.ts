import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { UserService } from '../../core/services/user/user.service';
import { Router } from '@angular/router';
import { ApiKeyService } from '../../core/services/localStorage/apiKey/api-key.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, InputTextModule, ButtonModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  resetPasswordForm = this.formBuilder.group({
    email: '',
    password: '',
    confirmPassword: '',
    username: ''
  });

  constructor(private userService: UserService, private formBuilder: FormBuilder, private messageService: MessageService, private router: Router, private apiKeyService: ApiKeyService) { }

  onSubmit(): void {
    const { email = "", username = "", password = "", confirmPassword = "" } = this.resetPasswordForm.value;

    if (!email || !username || !password || !confirmPassword) {
      this.messageService.add({ severity: 'error', summary: 'Campos vacíos', detail: 'Por favor, completa todos los campos.' });
      return;
    }

    if (password !== confirmPassword) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Las contraseñas no coinciden.' });
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Por favor, introduce un email válido.' });
      return;
    }

    this.userService.resetPassword(email, username, password, confirmPassword).subscribe((data) => {
      if (!data) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ocurrió un error al intentar cambiar tu contraseña.' });
        return;
      }

      if (!data.ok) {
        this.messageService.add({ severity: 'warn', summary: 'Error', detail: data.message });
        return;
      }

      if (data.message) {
        this.messageService.add({ severity: 'success', summary: 'Cambio de contraseña exitoso', detail: 'Tu contraseña ha sido cambiada exitosamente.' });
        this.apiKeyService.removeApiKey();
        this.router.navigate(['/login']);
        this.userService.logout();
      } else {
        this.resetPasswordForm.patchValue({
          password: "",
          confirmPassword: ""
        });
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ocurrió un error al intentar cambiar tu contraseña.' });
      }
    });
  }
}
