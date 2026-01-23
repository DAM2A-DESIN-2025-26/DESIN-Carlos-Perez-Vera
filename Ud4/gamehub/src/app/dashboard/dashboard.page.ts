import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton,
  IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton,
    IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel
  ],
})
export class DashboardPage { }
