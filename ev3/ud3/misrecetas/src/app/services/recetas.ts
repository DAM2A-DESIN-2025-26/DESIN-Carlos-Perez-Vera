import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Receta {
  id: number;
  name: string;
  difficulty: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  ingredients: string[];
  instructions: string[];
  image: string;
  tags: string[];
}

@Injectable({
  providedIn: 'root'
})
export class RecetasService {
  
  private apiUrl = 'https://dummyjson.com';
  
  // Signal para gestionar la lista de recetas en memoria
  recetas = signal<Receta[]>([]);

  constructor(private http: HttpClient) {}

  // GET /recipes - Obtener todas las recetas
  getRecetas() {
    return this.http.get<{ recipes: Receta[] }>(`${this.apiUrl}/recipes`);
  }

  // GET /recipes/{id} - Obtener una receta por ID
  getReceta(id: number) {
    return this.http.get<Receta>(`${this.apiUrl}/recipes/${id}`);
  }

  // POST /recipes/add - Crear nueva receta
  crearReceta(receta: any) {
    return this.http.post<Receta>(`${this.apiUrl}/recipes/add`, receta);
  }

  // PUT /recipes/{id} - Actualizar receta
  actualizarReceta(id: number, receta: any) {
    return this.http.put<Receta>(`${this.apiUrl}/recipes/${id}`, receta);
  }

  // DELETE /recipes/{id} - Eliminar receta
  eliminarReceta(id: number) {
    return this.http.delete(`${this.apiUrl}/recipes/${id}`);
  }
}