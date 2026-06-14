import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Incidencias {
  http = inject(HttpClient);
  apiUrl = 'http://192.168.0.65:8001';

  getIncidencias() {
  return this.http.get(`${this.apiUrl}/incidencias`);
  }
}
