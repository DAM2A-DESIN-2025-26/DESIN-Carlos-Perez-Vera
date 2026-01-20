export interface Ruta {
  id: number;
  nombre: string;
  descripcion: string;
  dificultad: string;
  duracion: number; 
  distancia: number;
  ubicacion: string;
  zona: string;
  imagen?: string; 
}