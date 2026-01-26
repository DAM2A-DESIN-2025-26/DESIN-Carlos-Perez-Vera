import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.page').then( m => m.DashboardPage),
    children: [
      {
        path: 'juegos',
        loadComponent: () => import('./pages/dashboard/juegos/juegos.page').then( m => m.JuegosPage)
      },
      {
        path: 'tienda',
        loadComponent: () => import('./pages/dashboard/tienda/tienda.page').then( m => m.TiendaPage)
      },
      {
        path: 'perfil',
        loadComponent: () => import('./pages/dashboard/perfil/perfil.page').then( m => m.PerfilPage),
        children: [
          {
            path: 'configuracion',
            loadComponent: () => import('./pages/dashboard/perfil/configuracion/configuracion.page').then( m => m.ConfiguracionPage)
          },
          {
            path: 'estadisticas',
            loadComponent: () => import('./pages/dashboard/perfil/estadisticas/estadisticas.page').then( m => m.EstadisticasPage)
          },
          {
            path: '',
            redirectTo: 'configuracion',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'juegos',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'juego-detalle/:id',
    loadComponent: () => import('./pages/juego-detalle/juego-detalle.page').then( m => m.JuegoDetallePage)
  },
];