import { Component,signal,inject } from '@angular/core';
import { IncidenciaService } from '../../services/incidencias';
import { UsuarioService } from '../../services/usuarios';
import { CategoriasService } from '../../services/categorias';
import { UsuarioInterface } from '../../interfaces/usuario';
import { CategoriaInterface } from '../../interfaces/categoria';
import { Router,RouterLink } from '@angular/router';

@Component({
  selector: 'app-nueva-incidencia',
  imports: [RouterLink],
  templateUrl: './nueva-incidencia.html',
  styleUrl: './nueva-incidencia.css',
})
export class NuevaIncidenciaComponent {
  // Servicios
  incidenciasService = inject(IncidenciaService);
  usuariosService    = inject(UsuarioService);
  categoriasService  = inject(CategoriasService);
  router = inject(Router);

  // Datos de listas
  usuarios   = signal<UsuarioInterface[]>([]);
  categorias = signal<CategoriaInterface[]>([]);

  // Datos del formulario
  titulo      = signal<string>('');
  descripcion = signal<string>('');
  estado      = signal<string>('ABIERTA');
  prioridad   = signal<string>('BAJA');
  aula        = signal<string>('');
  usuarioId   = signal<number>(0);
  categoriaId = signal<number>(0);

  mensaje = signal<string>('');

  ngOnInit(): void {
    this.cargarUsuarios();
    this.cargarCategorias();
  }

  cargarUsuarios() {
    this.usuariosService.getUsuarios().subscribe({
      next: (data) => this.usuarios.set(data),
      error: (err) => console.log(err)
    });
  }

  cargarCategorias() {
    this.categoriasService.getCategorias().subscribe({
      next: (data) => this.categorias.set(data),
      error: (err) => console.log(err)
    });
  }

  guardarIncidencia() {
    const nuevaIncidencia = {
      titulo: this.titulo(),
      descripcion: this.descripcion(),
      estado: this.estado(),
      prioridad: this.prioridad(),
      aula: this.aula(),
      usuarioId: this.usuarioId(),
      categoriaId: this.categoriaId()
    };

    this.incidenciasService.crearIncidencia(nuevaIncidencia).subscribe({
      next: (data) => {
        console.log('Incidencia creada', data);

        this.mensaje.set('Incidencia creada correctamente');

        this.titulo.set('');
        this.descripcion.set('');
        this.estado.set('ABIERTA');
        this.prioridad.set('BAJA');
        this.aula.set('');
        this.usuarioId.set(0);
        this.categoriaId.set(0);

        setTimeout(() => {
          this.router.navigate(['/incidencias']);
        }, 1500);
      },
      error: (err) => console.log(err)
    });
  }
}
