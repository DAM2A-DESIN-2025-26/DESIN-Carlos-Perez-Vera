import { App } from './app';
import { Routes } from '@angular/router';
import {  Hero } from './pages/hero/hero';
import { Counter } from './pages/counter/counter';
import { Dragonball } from './pages/dragonball/dragonball';
import { DragonballSuper } from './pages/dragonball-super/dragonballSuper';

export const routes: Routes = [

  {
    path: "",
    component: Counter
  },
  {
    path: "hero",
    component: Hero
  },
  {
    path: "dragonball",
    component: Dragonball
  },
  {
    path: "dragonballSuper",
    component: DragonballSuper
  },
  {
    path: "**",
    redirectTo: ''
  }

];
