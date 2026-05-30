import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  // Verificar si está logueado
  if (authService.isLoggedIn()) {
    return true;  // ✅ Permite acceso
  } else {
    // ❌ Redirige a login
    router.navigate(['/login']);
    return false;
  }
};