import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'incidencia-detalle',
    loadComponent: () => import('./pages/incidencia-detalle/incidencia-detalle.page').then( m => m.IncidenciaDetallePage)
  },
  {
    path: 'incidencia/:id',
    loadComponent: () =>
    import('./pages/incidencia-detalle/incidencia-detalle.page').then(
      (m) => m.IncidenciaDetallePage
    ),
  },
  {
    path: 'incidencia-nueva',
    loadComponent: () => import('./pages/incidencia-nueva/incidencia-nueva.page').then( m => m.IncidenciaNuevaPage)
  },
  {
    path: 'incidencia-editar/:id',
    loadComponent: () => import('./pages/incidencia-editar/incidencia-editar.page').then( m => m.IncidenciaEditarPage)
  },
  
];
