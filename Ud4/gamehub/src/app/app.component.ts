import { Component } from '@angular/core';
import { 
  IonApp, 
  IonMenu, 
  IonContent, 
  IonList, 
  IonMenuToggle, 
  IonItem, 
  IonIcon, 
  IonLabel, 
  IonRouterOutlet,
  IonTabBar, 
  IonTabButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [
    IonApp,
    IonMenu,
    IonContent,
    IonList,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar, 
    IonTabButton
    
  ],
  standalone: true
})
export class AppComponent {
  abrirAcercaDe() {
    console.log('Acerca de GameHub - modal pendiente');
  }
}
