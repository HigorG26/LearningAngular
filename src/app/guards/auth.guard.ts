import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const AuthGuard = () => {
  const router = inject(Router);
  const nome = sessionStorage.getItem('username');
    
  if (!nome) {
    router.navigate(['/login']);
    return false;
  }
    
  return true;
}; 