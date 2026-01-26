import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.page').then(m => m.DashboardPage),
  },
  {
    path: 'dashboard/juegos',
    loadComponent: () => import('./dashboard/juegos/juegos.page').then(m => m.JuegosPage),
  },
  {
    path: 'dashboard/tienda',
    loadComponent: () => import('./dashboard/tienda/tienda.page').then(m => m.TiendaPage),
  },
  {
    path: 'dashboard/perfil',
    loadComponent: () => import('./dashboard/perfil/perfil.page').then(m => m.PerfilPage),
  },
  {
    path: 'dashboard/perfil/configuracion',
    loadComponent: () => import('./dashboard/perfil/configuracion/configuracion.page').then(m => m.ConfiguracionPage),
  },
  {
    path: 'dashboard/juego-detalle/:id',
    loadComponent: () => import('./dashboard/juego-detalle/juego-detalle.page').then(m => m.JuegoDetallePage),
  }
];
