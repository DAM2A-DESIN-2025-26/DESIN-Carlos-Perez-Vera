import { UsuarioInterface } from "./usuario";
import { CategoriaInterface } from "./categoria";

export interface IncidenciaInterface {
    id: number;
  titulo: string;
  descripcion: string;
  estado: string;
  prioridad: string;
  fechaCreacion: string;
  aula: string;
  usuario: UsuarioInterface;
  categoria: CategoriaInterface;
}
