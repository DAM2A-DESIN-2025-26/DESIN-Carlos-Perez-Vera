import { Component, OnInit,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButton } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { UsuarioInterface } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/services/usuarios';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-usuarios-detalle',
  templateUrl: './usuarios-detalle.page.html',
  styleUrls: ['./usuarios-detalle.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, RouterLink]
})
export class UsuariosDetallePage implements OnInit {

  private route = inject(ActivatedRoute);

  private usuariosService = inject(UsuariosService);

  usuario !: UsuarioInterface;


  constructor() { }

  ngOnInit() {

     const id = this.route.snapshot.paramMap.get('id');

     if(id){
      this.usuariosService.getUsuarioById(+id).subscribe({
          next:(data)=>{
            this.usuario=data;
          },
          error:(error)=>{
            console.error(error);
          }
      })
     }
     

  }

}
