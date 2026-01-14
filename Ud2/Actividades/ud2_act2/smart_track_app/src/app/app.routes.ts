import { Routes } from '@angular/router';
import { ListaUsuariosComponent } from './pages/usuario/lista-usuarios/lista-usuarios';
import { FormUsuarioComponent } from './pages/usuario/form-usuario/form-usuario';

export const routes: Routes = [
  // Ruta por defecto: redirige a /usuarios
  { path: '', pathMatch: 'full', redirectTo: 'usuarios' },

  // Listado de usuarios
  { path: 'usuarios', component: ListaUsuariosComponent },

  // Alta de usuario
  { path: 'usuarios/nuevo', component: FormUsuarioComponent },

  // Edición de usuario (con id por parámetro)
  { path: 'usuarios/editar/:id', component: FormUsuarioComponent },
];
