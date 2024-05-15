import { CanActivateFn, Router } from '@angular/router';

import { inject } from '@angular/core';
import { ApiKeyService } from '../../../core/services/localStorage/apiKey/api-key.service';
import { map } from 'rxjs';


export const authGuard: CanActivateFn = (_route, _state) => {

  const apiKeyStorage = inject(ApiKeyService);
  const router = inject(Router);

  return apiKeyStorage.token$.pipe(
    map(token => {
      if (token) {
        return true;
      } else {
        router.navigate(['/login']);
        return false;
      }
    })
  );
};
