import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonIcon // 👈 Añadimos IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons'; // 👈 Importamos addIcons
import { menuOutline } from 'ionicons/icons'; // 👈 Importamos el icono de hamburguesa

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonIcon, // 👈 Lo incluimos en los imports
    CommonModule,
    FormsModule
  ]
})
export class ListadoPage {
  constructor() {
    // 👈 Forzamos a que el sistema reconozca el icono de la hamburguesa
    addIcons({ menuOutline });
  }
}
