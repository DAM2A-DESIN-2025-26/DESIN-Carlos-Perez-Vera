import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoriaInterface } from '../interfaces/categoria';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
    http = inject(HttpClient);
  apiUrl = 'http://192.168.7.189:8000/api';

  getCategorias(){
        return this.http.get<CategoriaInterface[]>(`${this.apiUrl}/categorias`);
    }
}
