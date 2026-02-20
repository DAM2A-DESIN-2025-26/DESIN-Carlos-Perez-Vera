import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarea } from '../interfaces/tarea.interface'; // Importamos el molde que hicimos antes

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  // 1. Inyectamos el cliente HTTP para poder navegar por internet
  private http = inject(HttpClient);

  // 2. Creamos una SEÑAL (Signal). Es una caja que guarda la lista de tareas.
  // Al ser una señal, si la lista cambia, la pantalla se actualiza sola.
  public tareas = signal<Tarea[]>([]);

  constructor() {
    // 3. Nada más arrancar la App, llamamos a la función para traer los datos
    this.getTareas();
  }

  getTareas() {
    // 4. Hacemos la petición GET a la URL de la API
    this.http.get<Tarea[]>('https://jsonplaceholder.typicode.com/todos')
      .subscribe({
        next: (data) => {
          // Si todo va bien, guardamos los datos en la señal
          this.tareas.set(data); 
          console.log('Tareas cargadas correctamente');
        },
        error: (err) => {
          console.error('Error al conectar con la API', err);
        }
      });
  }
}