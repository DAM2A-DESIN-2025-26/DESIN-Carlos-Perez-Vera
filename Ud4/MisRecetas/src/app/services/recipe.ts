import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  // Inyectamos el cliente HTTP para poder hacer peticiones a la API
  private http = inject(HttpClient);
  
  // La URL base que nos indica el ejercicio
  private apiUrl = 'https://dummyjson.com/recipes';

  constructor() { }

  // 1. OBTENER TODAS LAS RECETAS (Para el listado principal)
  getRecipes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // 2. OBTENER UNA SOLA RECETA (Para la página de detalle)
  getRecipeById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // 3. CREAR UNA RECETA (Para el formulario de añadir)
  addRecipe(recipe: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, recipe);
  }

  // 4. ACTUALIZAR UNA RECETA (Para el formulario de edición)
  updateRecipe(id: string, recipe: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, recipe);
  }

  // 5. ELIMINAR UNA RECETA
  deleteRecipe(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}