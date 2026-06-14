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
        redirectTo: 'incidencias',
        pathMatch: 'full',
      },
    ],
  },
  
];
