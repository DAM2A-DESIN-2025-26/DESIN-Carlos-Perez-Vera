import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'lista-tareas',
    loadComponent: () => import('./pages/lista-tareas/lista-tareas.page').then( m => m.ListaTareasPage)
  },
  {
    // Cuando la ruta esté vacía (al abrir la app)...
    path: '',
    // ...redirige automáticamente a 'lista-tareas'
    redirectTo: 'lista-tareas',
    // 'full' significa que la URL debe estar totalmente vacía para que esto ocurra
    pathMatch: 'full',
  },
  {
    // Ruta comodín: si el usuario escribe cualquier otra cosa, lo mandamos a la lista
    path: '**',
    redirectTo: 'lista-tareas',
    pathMatch: 'full',
  },
];