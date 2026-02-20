import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, 
  IonMenuButton, IonIcon, IonGrid, IonRow, IonCol, 
  IonCard, IonCardHeader, IonCardTitle, IonButton 
} from '@ionic/angular/standalone'; 
import { addIcons } from 'ionicons';
import { menuOutline, trashOutline, eyeOutline } from 'ionicons/icons';
import { PeliculasService } from '../../../services/peliculas';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, 
    IonMenuButton, IonIcon, IonGrid, IonRow, IonCol, 
    IonCard, IonCardHeader, IonCardTitle, IonButton // 👈 ¡ESTO ES LO QUE TE FALTABA EN TU IMAGEN!
  ]
})
export class ListadoPage implements OnInit {
  public pelisService = inject(PeliculasService);

  constructor() {
    addIcons({ menuOutline, trashOutline, eyeOutline });
  }

  ngOnInit() {
    // Esto es lo que imprime el mensaje que vemos en tu consola
    this.pelisService.getPeliculas();
  }

  eliminarPeli(id: number) {
    this.pelisService.deletePelicula(id);
  }
}