import { Component } from '@angular/core';
import { NavController } from '@ionic/angular/standalone';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.page.html',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons],
})
export class EstadisticasPage {
  constructor(private navCtrl: NavController) {}

  volverPerfil() {
    this.navCtrl.pop();
  }
}
