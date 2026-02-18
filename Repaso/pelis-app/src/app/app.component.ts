import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonApp,
  IonRouterOutlet,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonLabel
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  filmOutline,
  personCircleOutline,
  informationCircleOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    RouterLink, // 👈 Importante para que funcionen los enlaces de navegación
    IonApp,
    IonRouterOutlet,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonIcon,
    IonLabel
  ],
})
export class AppComponent {
  constructor() {
    // Registramos los iconos del menú
    addIcons({
      filmOutline,
      personCircleOutline,
      informationCircleOutline
    });
  }

  // Método para el botón "Acerca de"
  openAboutModal() {
    console.log('Abriendo modal Acerca de...');
    // Por ahora solo ponemos un mensaje, más adelante crearemos el modal real.
    alert("Pelis App v1.0 - Creado en Ionic & Angular");
  }
}
