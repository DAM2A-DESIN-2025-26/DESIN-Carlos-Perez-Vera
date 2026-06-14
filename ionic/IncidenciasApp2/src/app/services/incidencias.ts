import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class IncidenciasService {
  private http = inject(HttpClient);
  private apiUrl = 'http://192.168.7.189:8000/api';
  
  
  constructor() {

  }

  getIncidencias() {
    return this.http.get<any>(`${this.apiUrl}/incidencias`);
  }

  getIncidenciasOrdenadasPrioridad() {
    return this.http.get<any>(`${this.apiUrl}/incidencias/ordenadas/prioridad`);
  }

  getIncidenciasPorEstado(estado: string) {
    return this.http.get<any>(`${this.apiUrl}/incidencias/estado/${estado}`);
  }

  getIncidenciaById(id: number) {
    return this.http.get<any>(`${this.apiUrl}/incidencias/${id}`);
  }

  contarAbiertas() {
    return this.http.get<any>(`${this.apiUrl}/incidencias/contar/abiertas`);
  }

  crearIncidencia(incidencia: any) {
    return this.http.post<any>(`${this.apiUrl}/incidencias`, incidencia);
  }

   actualizarIncidencia(id:number,incidencia:any){
    return this.http.put<any>(`${this.apiUrl}/incidencias/${id}`,incidencia)
  } 

  eliminarIncidencia(id: number) {
  return this.http.delete<any>(`${this.apiUrl}/incidencias/${id}`);
}
}
