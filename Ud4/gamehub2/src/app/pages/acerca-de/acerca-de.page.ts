import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonButtons, IonButton, IonIcon, IonText, IonCard, IonCardContent 
} from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular/standalone'; 
import { addIcons } from 'ionicons';
import { gameControllerOutline } from 'ionicons/icons';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.page.html',
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonButtons, IonButton, IonIcon, IonText, IonCard, IonCardContent
  ]
})
export class AcercaDePage {

  constructor(private modalCtrl: ModalController) {
    addIcons({ gameControllerOutline });
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }
}