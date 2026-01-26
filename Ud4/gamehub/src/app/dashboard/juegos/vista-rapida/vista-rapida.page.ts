import { Component, Input } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonButton, IonButtons, IonChip, IonLabel, IonCard, IonCardContent
} from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular/standalone';  // ← AÑADIDO

interface Juego {
  id: number;
  titulo: string;
  precio: number;
  popular: boolean;
}

@Component({
  selector: 'app-vista-rapida',
  templateUrl: './vista-rapida.page.html',
  styleUrls: ['./vista-rapida.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonButton, IonButtons, IonChip, IonLabel, IonCard, IonCardContent
  ]  // ← NO NavController aquí
})
export class VistaRapidaPage {
  @Input() juego!: Juego;

  constructor(private modalCtrl: ModalController, private navCtrl: NavController) {}

  verEnTienda() {
    this.modalCtrl.dismiss();
    this.navCtrl.navigateRoot('/dashboard/tienda');
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
