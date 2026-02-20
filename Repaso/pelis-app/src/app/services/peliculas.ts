import { Injectable, signal } from '@angular/core';

export interface Pelicula {
  id: number;
  title: string;
  poster: string;
}

@Injectable({
  providedIn: 'root'
})
export class PeliculasService { // 👈 ¡ESTE EXPORT ES VITAL!

  public peliculas = signal<Pelicula[]>([]);

  constructor() { }

  getPeliculas() {
   /*  const datosEjemplo: Pelicula[] = [
      { id: 1, title: 'Inside Out 2', poster: 'https://placehold.co/300x450' },
      { id: 2, title: 'Deadpool & Wolverine', poster: 'https://placehold.co/300x450' }
    ];
    this.peliculas.set(datosEjemplo); */
  }

  deletePelicula(id: number) {
    this.peliculas.update(prev => prev.filter(p => p.id !== id));
  }
}