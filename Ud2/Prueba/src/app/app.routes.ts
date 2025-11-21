import { Routes } from '@angular/router';
import { App } from './app';
import { Counter } from './pages/counter/counter';

export const routes: Routes = [
  {
    path: "counter",
    component: Counter
  },
  {
    path: "",
    component: App
  }
];
