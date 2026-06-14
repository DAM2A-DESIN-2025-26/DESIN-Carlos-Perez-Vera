import { Routes } from '@angular/router';
import { Incidencias} from './pages/incidencias/incidencias';
import { IncidenciasDetalle } from './pages/incidencias-detalle/incidencias-detalle';
import { NuevaIncidenciaComponent } from './pages/nueva-incidencia/nueva-incidencia';
import { Usuarios } from './pages/usuarios/usuarios';
import { UsuariosDetalle } from './pages/usuarios-detalle/usuarios-detalle';

export const routes: Routes = [

    { path: '', redirectTo: 'incidencias', pathMatch: 'full' },
    { path: 'incidencias', component: Incidencias },
    { path: 'incidencias/:id', component : IncidenciasDetalle  },
    { path: 'nueva-incidencia',component : NuevaIncidenciaComponent },
    { path: 'usuarios',component : Usuarios },
    { path: 'usuarios/:id',component:UsuariosDetalle }

];
