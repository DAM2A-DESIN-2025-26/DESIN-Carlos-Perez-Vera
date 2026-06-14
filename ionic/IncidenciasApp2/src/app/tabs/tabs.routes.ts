import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'incidencias',
        loadComponent: () =>
          import('../tab1/tab1.page').then((m) => m.Incidencias),
      },
      {
        path: 'usuarios',
        loadComponent: () =>
          import('../tab2/tab2.page').then((m) => m.Usuarios),
      },
      {
        path: '',
        redirectTo: '/tabs/incidencias',
        pathMatch: 'full',
      },
       {
      path: 'incidencia-editar/:id',
      loadComponent: () =>
        import('../pages/incidencia-editar/incidencia-editar.page').then(m => m.IncidenciaEditarPage)
      },
      {
      path: 'usuarios-detalle/:id',
      loadComponent: () =>
        import('../pages/usuarios-detalle/usuarios-detalle.page').then(m => m.UsuariosDetallePage)
      }
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/incidencias',
    pathMatch: 'full',
  },
];
