import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private http = inject(HttpClient);
  private apiUrl = 'http://192.168.7.189:8000/api';

  constructor() { }

  getCategorias() {
    return this.http.get<any>(`${this.apiUrl}/categorias`);
  }
}