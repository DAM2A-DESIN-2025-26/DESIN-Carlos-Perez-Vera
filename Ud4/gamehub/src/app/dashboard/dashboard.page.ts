import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton,
  IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet,
  IonMenu, IonList, IonItem, IonMenuToggle
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton,
    IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet,
    IonMenu, IonList, IonItem, IonMenuToggle
  ],
})
export class DashboardPage {
  abrirAcerca() {
    console.log('Acerca de GameHub - modal pendiente');
  }
}
