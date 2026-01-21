import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 /*  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.HomePageModule)
  }, */
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'rutas',
    loadComponent: () => import('./pages/rutas/rutas.page').then( m => m.RutasPage)
  },
  {
    path: 'gastro',
    loadComponent: () => import('./pages/gastro/gastro.page').then( m => m.GastroPage)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
