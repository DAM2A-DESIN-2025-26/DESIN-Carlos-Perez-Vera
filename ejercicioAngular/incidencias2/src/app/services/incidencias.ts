import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IncidenciaInterface } from '../interfaces/incidencia';

@Injectable({
  providedIn: 'root',
})
export class IncidenciaService {
  http = inject(HttpClient);
  apiUrl = 'http://192.168.7.189:8000/api';

  getIncidenciasById(id:number){
    return this.http.get<IncidenciaInterface>(`${this.apiUrl}/incidencias/${id}`);
  }

  // El filtro por estado es path param, no query param
  getIncidenciasPorEstado(estado: string){
    return this.http.get<IncidenciaInterface[]>(`${this.apiUrl}/incidencias/estado/${estado}`);
  }

// La ruta del contador es diferente
  getIncidenciasAbiertas() {
    return this.http.get<Record<string, number>>(`${this.apiUrl}/incidencias/contar/abiertas`);
  }

// El listado ordenado por prioridad
  getIncidencias(){
    return this.http.get<IncidenciaInterface[]>(`${this.apiUrl}/incidencias/ordenadas/prioridad`);
  }

//post
  crearIncidencia(incidencia: any) {
    return this.http.post(`${this.apiUrl}/incidencias`, incidencia);
  }

}
