import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Importamos los componentes específicos de Tabs e Iconos
import { 
  IonContent, 
  IonTabs, 
  IonTabBar, 
  IonTabButton, 
  IonIcon, 
  IonLabel 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { gameControllerOutline, cartOutline, personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonTabs, 
    IonTabBar, 
    IonTabButton, 
    IonIcon, 
    IonLabel, 
    CommonModule, 
    FormsModule
  ]
})
export class DashboardPage implements OnInit {
  constructor() {
    // Registramos los iconos para que se puedan visualizar
    addIcons({ gameControllerOutline, cartOutline, personOutline });
  }

  ngOnInit() {}
}