import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    
    path: 'recipe-detail/:id', 
    loadComponent: () => import('./pages/recipe-detail/recipe-detail.page').then( m => m.RecipeDetailPage)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'recipe-add',
    loadComponent: () => import('./pages/recipe-add/recipe-add.page').then( m => m.RecipeAddPage)
  },
  {
  
  path: 'recipe-edit/:id', 
  loadComponent: () => import('./pages/recipe-edit/recipe-edit.page').then( m => m.RecipeEditPage)
},
];