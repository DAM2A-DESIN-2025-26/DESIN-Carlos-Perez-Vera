import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonTextarea
} from '@ionic/angular/standalone';
import { ActivatedRoute, Router,RouterLink } from '@angular/router';
import { IncidenciasService } from 'src/app/services/incidencias';
import { UsuariosService } from 'src/app/services/usuarios';
import { CategoriasService } from 'src/app/services/categorias';

@Component({
  selector: 'app-incidencia-editar',
  templateUrl: './incidencia-editar.page.html',
  styleUrls: ['./incidencia-editar.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButton,IonItem,IonLabel,IonSelectOption, RouterLink,IonSelect,IonInput, IonTextarea]
})
export class IncidenciaEditarPage implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private incidenciasService = inject(IncidenciasService);
  private usuariosService = inject(UsuariosService);
  private categoriasService = inject(CategoriasService);

  id!: number;

  titulo: string = '';
  descripcion: string = '';
  prioridad: string = '';
  estado: string = '';
  aula: string = '';
  usuarioId!: number;
  categoriaId!: number;

  usuarios: any[] = [];
  categorias: any[] = [];

  constructor() { }

  ngOnInit() {

     this.id = Number(this.route.snapshot.paramMap.get('id'));

     this.cargarUsuarios();
    this.cargarCategorias();
    this.cargarIncidencia();


  }

  actualizarIncidencia(){
        const incidenciaActualizada = {
      titulo: this.titulo,
      descripcion: this.descripcion,
      prioridad: this.prioridad,
      estado: this.estado,
      aula: this.aula,
      usuarioId: this.usuarioId,
      categoriaId: this.categoriaId
    };

     this.incidenciasService.actualizarIncidencia(this.id, incidenciaActualizada).subscribe({
      next: () => {
        alert('Incidencia actualizada correctamente');
        this.router.navigate(['/tabs/incidencias']);
      },
      error: (error) => {
        console.error(error);
        alert('Error al actualizar la incidencia');
      }
    });

  }

  cargarUsuarios() {
    this.usuariosService.getUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  cargarCategorias() {
    this.categoriasService.getCategorias().subscribe({
      next: (data) => {
        this.categorias = data;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  cargarIncidencia() {
    this.incidenciasService.getIncidenciaById(this.id).subscribe({
      next: (data) => {
        this.titulo = data.titulo;
        this.descripcion = data.descripcion;
        this.prioridad = data.prioridad;
        this.estado = data.estado;
        this.aula = data.aula;
        this.usuarioId = data.usuario.id;
        this.categoriaId = data.categoria.id;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
