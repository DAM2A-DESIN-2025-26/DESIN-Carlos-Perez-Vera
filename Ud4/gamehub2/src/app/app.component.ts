import { Component } from '@angular/core';

import { 
  ModalController, 
  IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, 
  IonTitle, IonContent, IonList, IonItem, IonIcon, 
  IonLabel, IonButtons, IonMenuButton 
} from '@ionic/angular/standalone'; 
import { AcercaDePage } from './pages/acerca-de/acerca-de.page';
import { addIcons } from 'ionicons';
import { gameControllerOutline, cartOutline, personOutline, informationCircleOutline } from 'ionicons/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, 
    IonTitle, IonContent, IonList, IonItem, IonIcon, 
    IonLabel, IonButtons, IonMenuButton, RouterLink
  ],
  // Hay q obligar al componente a tener su propio proveedor de Modales
  providers: [ModalController] 
})
export class AppComponent {
  constructor(private modalCtrl: ModalController) {
    addIcons({ gameControllerOutline, cartOutline, personOutline, informationCircleOutline });
  }

  async abrirModalAcercaDe() {
    const modal = await this.modalCtrl.create({
      component: AcercaDePage,
    });
    await modal.present(); 
  }
}