import { Routes } from '@angular/router';

import { Contacto } from './pages/contacto/contacto';
import { Habilidades } from './pages/habilidades/habilidades';
import { Inicio } from './pages/inicio/inicio';
import { Sobremi } from './pages/sobremi/sobremi';

export const routes: Routes = [
    {path: '', component:Inicio},
    {path: 'sobremi', component:Sobremi},
    {path: 'habilidades', component:Habilidades},
    {path: 'contacto', component:Contacto}
];
