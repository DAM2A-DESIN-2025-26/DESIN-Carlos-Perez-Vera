import { Injectable, signal ,inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Tarea {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  // 1 (HttpClient) para pedir datos a internet
  private http = inject(HttpClient);

  // 2 Nuestra pizarra  (Señal) que empieza vacía []
  public tareas = signal<Tarea[]>([]);

  // 3 Función para ir a buscar las tareas a internet
  getTareas() {
    this.http.get<Tarea[]>('https://jsonplaceholder.typicode.com/todos')
      .subscribe((data) => {
        // Guardamos los datos recibidos en nuestra pizarra 
        this.tareas.set(data);
      });
      
  }

  public cambiarEstado(id: number) {
  this.tareas.update(lista =>
    lista.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    )
  );
}

  constructor() {
    this.getTareas();
  }
}
