import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, 
  IonContent, IonButton, IonRouterOutlet 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonRouterOutlet],
})
export class PerfilPage { }
