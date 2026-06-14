import { Component, OnInit,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonInput, IonTextarea, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { RouterLink, Router } from '@angular/router';
import { UsuarioInterface } from 'src/app/interfaces/usuario';
import { CategoriaInterface } from 'src/app/interfaces/categoria';
import { UsuariosService } from 'src/app/services/usuarios';
import { CategoriasService } from 'src/app/services/categorias';
import { IncidenciasService } from 'src/app/services/incidencias';
import { IncidenciaInterface } from 'src/app/interfaces/incidencia';


@Component({
  selector: 'app-incidencia-nueva',
  templateUrl: './incidencia-nueva.page.html',
  styleUrls: ['./incidencia-nueva.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, RouterLink, IonItem, IonLabel, IonInput, IonTextarea, IonSelect, IonSelectOption]
})
export class IncidenciaNuevaPage implements OnInit {

  titulo:string = '';
  descripcion:string='';
  prioridad:string='';
  usuarioId:number | null = null;
  estado:string='';
  aula:string='';
  categoriaId:number | null = null;

  usuarios: UsuarioInterface[] = [];
categorias: CategoriaInterface[] = [];

  usuariosService = inject(UsuariosService);
  categoriasService = inject(CategoriasService);
  incidenciasService = inject(IncidenciasService);

  router = inject(Router);

  constructor() { }

  ngOnInit() {
    this.usuariosService.getUsuarios().subscribe({
      next: (data) => {
       console.log('PRIMER USUARIO', data[0]);
    this.usuarios = data;
      },
    error: (error) => {
    console.error(error);
    }
    });

    this.categoriasService.getCategorias().subscribe({
      next: (data) => {
    this.categorias = data;
      },
    error: (error) => {
    console.error(error);
    }
    });

  }

  crearIncidencia(){
     const incidencia = {
    titulo: this.titulo,
    descripcion: this.descripcion,
    prioridad: this.prioridad,
    usuarioId: this.usuarioId,
    estado: this.estado,
    aula: this.aula,
    categoriaId: this.categoriaId
  };

    this.incidenciasService.crearIncidencia(incidencia).subscribe({
      next: (data) => {
      console.log('Incidencia creada', data);
       this.router.navigate(['/tabs/incidencias']);
    },
    error: (error) => {
      console.error(error);
    }
    });
  }

}
