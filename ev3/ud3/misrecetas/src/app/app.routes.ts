import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'listado',
    pathMatch: 'full',
  },
  {
    path: 'listado',
    loadComponent: () => import('./pages/listado/listado.page').then( m => m.ListadoPage)
  },
  {
    path: 'detalle/:id',
    loadComponent: () => import('./pages/detalle/detalle.page').then( m => m.DetallePage)
  },
  {
    path: 'crear-editar',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/crear-editar/crear-editar.page').then( m => m.CrearEditarPage)
  },
  {
    path: 'crear-editar/:id',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/crear-editar/crear-editar.page').then( m => m.CrearEditarPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
];
