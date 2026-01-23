import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-estadisticas',  // ← FIJADO: diferente de app-configuracion
  templateUrl: './estadisticas.page.html',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class EstadisticasPage { }
