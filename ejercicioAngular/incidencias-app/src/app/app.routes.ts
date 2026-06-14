import { Routes } from '@angular/router';
import {IncidenciasList} from './pages/incidencias-list/incidencias-list';
import {UsuariosList} from './pages/usuarios-list/usuarios-list';
import {IncidenciaNew} from './pages/incidencia-new/incidencia-new';
import {UsuarioDetail} from './pages/usuario-detail/usuario-detail';
import {IncidenciaDetail} from './pages/incidencia-detail/incidencia-detail';

export const routes: Routes = [
    {path: '', redirectTo: 'incidencias', pathMatch: 'full' },
    {path: 'incidencias', component: IncidenciasList},
    {path: 'incidencias/nueva', component: IncidenciaNew},
    {path: 'incidencias/:id', component: IncidenciaDetail},
    {path: 'usuarios', component: UsuariosList},
    {path: 'usuarios/:id', component: UsuarioDetail}
    
    
];
