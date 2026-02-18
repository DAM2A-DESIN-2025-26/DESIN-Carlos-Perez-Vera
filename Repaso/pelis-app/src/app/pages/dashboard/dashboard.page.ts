import { Component } from '@angular/core'; // Eliminamos OnInit si no lo vamos a usar
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonIcon,
  IonLabel,
  IonTabButton,
  IonTabBar,
  IonTabs
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons'; //  Necesario para que se vean los iconos
import { listOutline, personOutline } from 'ionicons/icons'; //  Importamos los iconos específicos

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    IonIcon,
    IonLabel,
    IonTabButton,
    IonTabBar,
    IonTabs
  ]
})
export class DashboardPage {
  constructor() {
    //  Registramos los iconos para que Ionic sepa cuáles usar
    addIcons({ listOutline, personOutline });
  }
}
