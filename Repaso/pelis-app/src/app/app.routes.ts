import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'detalle',
    loadComponent: () => import('./pages/detalle/detalle.page').then( m => m.DetallePage)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.page').then( m => m.DashboardPage)
  },
  {
    path: 'listado',
    loadComponent: () => import('./pages/dashboard/listado/listado.page').then( m => m.ListadoPage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./pages/dashboard/perfil/perfil.page').then( m => m.PerfilPage)
  },
];
