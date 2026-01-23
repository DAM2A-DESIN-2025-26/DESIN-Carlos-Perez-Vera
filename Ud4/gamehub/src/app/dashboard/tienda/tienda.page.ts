import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonChip, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonChip, IonLabel],
})
export class TiendaPage {
  plataformas = ['PC', 'PS5', 'Xbox', 'Switch'];

  constructor(private router: Router) {}

  filtrarPorPlataforma(plataforma: string) {
    this.router.navigate(['/dashboard/juegos'], {
      state: { plataforma }
    });
  }
}
