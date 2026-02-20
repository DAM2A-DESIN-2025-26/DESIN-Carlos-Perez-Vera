import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/listado', // ⬇️ CAMBIO 1: Redirigimos a la sub-página 'listado' dentro de 'dashboard'
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.page').then( m => m.DashboardPage),
    // ⬇️ ESTE ES EL CAMBIO CLAVE: Definimos las sub-páginas aquí dentro
    children: [
      {
        path: 'listado',
        loadComponent: () => import('./pages/dashboard/listado/listado.page').then(m => m.ListadoPage)
      },
      {
        path: 'perfil',
        loadComponent: () => import('./pages/dashboard/perfil/perfil.page').then(m => m.PerfilPage)
      },
      {
        path: '',
        redirectTo: 'listado',
        pathMatch: 'full'
      }
    ]
  },
  {
    // ⬇️ CAMBIO 2: Añadimos el :id para que sea una ruta dinámica
    path: 'detalle/:id',
    loadComponent: () => import('./pages/detalle/detalle.page').then( m => m.DetallePage)
  },
];
/* import { Routes } from '@angular/router';

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
 */
