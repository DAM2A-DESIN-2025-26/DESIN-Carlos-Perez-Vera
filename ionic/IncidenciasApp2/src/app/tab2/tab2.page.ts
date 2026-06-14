import { Component,OnInit,inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList,IonItem,IonLabel } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { UsuarioInterface } from '../interfaces/usuario';
import { UsuariosService } from '../services/usuarios';
import { Router,RouterLink } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonList,IonItem,RouterLink,IonLabel]
})
export class Usuarios implements OnInit{
  /* Revisar lo de load componente posible ejercicio */

  usuarioService = inject(UsuariosService);
  usuarios:UsuarioInterface[]=[];


  ngOnInit() {
    this.cargarUsuarios();
  }

  constructor() {}

  cargarUsuarios(){
    this.usuarioService.getUsuarios().subscribe({

      next:(data) =>{
        this.usuarios=data;
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }

}
