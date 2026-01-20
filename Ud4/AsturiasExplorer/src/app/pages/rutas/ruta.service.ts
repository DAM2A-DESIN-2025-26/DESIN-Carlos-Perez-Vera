import { Injectable } from '@angular/core';
import { Ruta } from './ruta.model';

@Injectable({
  providedIn: 'root'
})
export class RutaService {

  private rutas: Ruta[] = [
    {
      id: 1,
      nombre: 'Ruta del Cares',
      descripcion: 'Una ruta espectacular por los Picos de Europa',
      dificultad: 'Media',
      duracion: 180,
      distancia: 12,
      ubicacion: 'Cabrales, Asturias',
      zona: 'Picos de Europa',
      imagen: 'assets/images/ruta-cares.jpg'
    },
    {
      id: 2,
      nombre: 'Lagos de Covadonga',
      descripcion: 'Ruta circular alrededor de los lagos',
      dificultad: 'Difícil',
      duracion: 240,
      distancia: 18,
      ubicacion: 'Cangas de Onís, Asturias',
      zona: 'Picos de Europa',
      imagen: 'assets/images/lagos-covadonga.jpg'
    },
    {
      id: 3,
      nombre: 'Senda del Oso',
      descripcion: 'Camino entre montañas boscosas',
      dificultad: 'Fácil',
      duracion: 120,
      distancia: 8,
      ubicacion: 'Proaza, Asturias',
      zona: 'Somiedo',
      imagen: 'assets/images/senda-oso.jpg'
    },
    {
      id: 4,
      nombre: 'Ruta del Alba',
      descripcion: 'Ascensión al pico del Alba',
      dificultad: 'Media',
      duracion: 200,
      distancia: 15,
      ubicacion: 'Cabrales, Asturias',
      zona: 'Picos de Europa',
      imagen: 'assets/images/ruta-alba.jpg'
    }
  ];

  obtenerRutas(): Ruta[] {
    return this.rutas;
  }
}
