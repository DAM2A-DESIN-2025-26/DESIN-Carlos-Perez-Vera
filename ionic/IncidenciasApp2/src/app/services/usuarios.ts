import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {

  private http = inject(HttpClient);
  private apiUrl = 'http://192.168.7.189:8000/api';

  constructor() { }

  getUsuarios() {
    return this.http.get<any>(`${this.apiUrl}/usuarios`);
  }

  getUsuarioById(id: number) {
    return this.http.get<any>(`${this.apiUrl}/usuarios/${id}`);
  }
}
