import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.page').then( m => m.DashboardPage)
  },
  {
    path: 'juegos',
    loadComponent: () => import('./dashboard/juegos/juegos.page').then( m => m.JuegosPage)
  },
  {
    path: 'tienda',
    loadComponent: () => import('./dashboard/tienda/tienda.page').then( m => m.TiendaPage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./dashboard/perfil/perfil.page').then( m => m.PerfilPage)
  },
  {
    path: 'juego-detalle',
    loadComponent: () => import('./juego-detalle/juego-detalle.page').then( m => m.JuegoDetallePage)
  },
  {
    path: 'configuracion',
    loadComponent: () => import('./perfil/configuracion/configuracion.page').then( m => m.ConfiguracionPage)
  },
  {
    path: 'estadisticas',
    loadComponent: () => import('./perfil/estadisticas/estadisticas.page').then( m => m.EstadisticasPage)
  },
];
