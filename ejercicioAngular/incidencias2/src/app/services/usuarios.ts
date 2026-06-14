import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioInterface } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

    http = inject(HttpClient);
  apiUrl = 'http://192.168.7.189:8000/api';

  getUsuarios(){
      return this.http.get<UsuarioInterface[]>(`${this.apiUrl}/usuarios`);
  }

  getUsuariosById(id:number){
      return this.http.get<UsuarioInterface>(`${this.apiUrl}/usuarios/${id}`);
    }
  
}
