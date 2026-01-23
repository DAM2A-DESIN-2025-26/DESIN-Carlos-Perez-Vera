import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard/juegos',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.page').then(m => m.DashboardPage),
    children: [
      {
        path: 'juegos',
        loadComponent: () => import('./dashboard/juegos/juegos.page').then(m => m.JuegosPage)
      },
      {
        path: 'tienda',
        loadComponent: () => import('./dashboard/tienda/tienda.page').then(m => m.TiendaPage)
      },
      {
        path: 'perfil',
        loadComponent: () => import('./dashboard/perfil/perfil.page').then(m => m.PerfilPage),
        children: [
          {
            path: '',
            redirectTo: 'configuracion',
            pathMatch: 'full',
          },
          {
            path: 'configuracion',
            loadComponent: () => import('./dashboard/perfil/configuracion/configuracion.page').then(m => m.ConfiguracionPage)
          },
          {
            path: 'estadisticas',
            loadComponent: () => import('./dashboard/perfil/estadisticas/estadisticas.page').then(m => m.EstadisticasPage)
          }
        ]
      },
      {
        path: 'juego-detalle/:id',
loadComponent: () => import('./dashboard/juego-detalle/juego-detalle.page').then(m => m.JuegoDetallePage)
      }
    ]
  }
];
