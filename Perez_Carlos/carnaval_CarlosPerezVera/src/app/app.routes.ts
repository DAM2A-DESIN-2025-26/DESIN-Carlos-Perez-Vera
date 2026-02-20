import { Routes } from '@angular/router';

export const routes: Routes = [


  {
    path: 'disfraces',
    loadComponent: () => import('./pages/disfraces/disfraces.page').then( m => m.DisfracesPage)
  },
  {
    path: 'desfiles',
    loadComponent: () => import('./pages/desfiles/desfiles.page').then( m => m.DesfilesPage)
  },
  {
    path: '',
    redirectTo: 'disfraces',
    pathMatch: 'full',
  },
];
