import { App } from './app';
import { Routes } from '@angular/router';
import {  Hero } from './pages/hero/hero';
import { Counter } from './pages/counter/counter';

export const routes: Routes = [
  {
    path: "counter",
    component: Counter
  },
  {
    path: "",
    component: Hero
  },
  {
    path: "hero",
    component: Hero
  }
];
