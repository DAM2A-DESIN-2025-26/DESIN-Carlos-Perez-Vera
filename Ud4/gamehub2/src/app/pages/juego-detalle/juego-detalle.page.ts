import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, 
  IonButtons, IonBackButton, IonText 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-juego-detalle',
  templateUrl: './juego-detalle.page.html',
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, 
    IonButtons, IonBackButton, IonText
  ]
})
export class JuegoDetallePage implements OnInit {
  
  
  nombreJuego: string = '';
  precioJuego: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Escuchamos la URL para pillar los parámetros
    this.route.queryParams.subscribe(params => {
      this.nombreJuego = params['nombre'];
      this.precioJuego = params['precio'];
    });
  }
}