import { Routes } from '@angular/router';
import { ListaUsuariosComponent } from './pages/usuario/lista-usuarios/lista-usuarios';
import { FormUsuarioComponent } from './pages/usuario/form-usuario/form-usuario';
import { EmpresasComponent } from './pages/empresas/empresas';


export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'usuarios' },

  { path: 'usuarios', component: ListaUsuariosComponent },

  { path: 'usuarios/nuevo', component: FormUsuarioComponent },

  { path: 'usuarios/editar/:dni', component: FormUsuarioComponent },

   { path: 'empresas', component: EmpresasComponent },
];
