import { Injectable } from '@angular/core';
import { Gastronomia } from './gastro.model';

@Injectable({
  providedIn: 'root'
})
export class GastronomiaService {

  private gastronomias: Gastronomia[] = [
    {
      id: 1,
      nombre: 'Casa Marcial',
      descripcion: 'Restaurante con dos estrellas Michelin',
      tipo: 'Restaurante',
      ubicacion: 'Oviedo, Asturias',
      puntuacion: 5,
      telefonoContacto: '+34 985 334 449',
      especialidad: 'Cocina asturiana moderna',
      imagen: 'assets/images/fabada.jpg',
      botton: 'Dónde probarla'
    },
    {
      id: 2,
      nombre: 'Café del Huerto',
      descripcion: 'Café acogedor con buena repostería',
      tipo: 'Cafetería',
      ubicacion: 'Oviedo, Asturias',
      puntuacion: 4.5,
      telefonoContacto: '+34 985 123 456',
      especialidad: 'Postres y café',
      imagen: 'assets/images/cafe.jpg',
      botton: 'Ver receta'
    },
    {
      id: 3,
      nombre: 'La Sidra',
      descripcion: 'Bar tradicional asturiano',
      tipo: 'Bar',
      ubicacion: 'Gijón, Asturias',
      puntuacion: 4,
      telefonoContacto: '+34 985 987 654',
      especialidad: 'Sidra y tapas asturianas',
      imagen: 'assets/images/sidra.jpg',
      botton: 'Dónde probarla'
    }
  ];

  obtenerGastronomias(): Gastronomia[] {
    return this.gastronomias;
  }
}
