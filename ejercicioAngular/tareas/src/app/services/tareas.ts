import { Injectable,inject,signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TareasInterface } from '../interfaces/tareas';

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  
  http = inject(HttpClient);
  apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  /* Array reactivo de tareas */
  tareas = signal<TareasInterface[]>([]);

  constructor(){
    // comentario: al crear el servicio, cargamos las tareas desde la API
    this.getTareas();
  }

  getTareas(){
    // Hace la petición HTTP a la API y guarda el array de tareas recibido en la signal reactiva `tareas`
    this.http.get<TareasInterface[]>(this.apiUrl).subscribe({
    next: (data) => {
      this.tareas.set(data);
    },
    error: (error) => {
      console.error(error);
    }
    });

    /* this.http.get<TareasInterface[]>(this.apiUrl)
  .subscribe( (data) => {
    this.tareas.set(data);
  }); */
   
  }

}
