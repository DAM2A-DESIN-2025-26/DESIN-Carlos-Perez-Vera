import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class TiendaPage { }
