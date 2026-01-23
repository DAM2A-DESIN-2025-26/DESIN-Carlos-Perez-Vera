import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular/standalone';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons,
  IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonChip
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

interface Juego {
  id: number;
  titulo: string;
  plataforma: string;
  genero: string;
  precio: number;
  popular: boolean;
}

@Component({
  selector: 'app-juego-detalle',
  templateUrl: './juego-detalle.page.html',
  styleUrls: ['./juego-detalle.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons,
    IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonChip
  ],
})
export class JuegoDetallePage implements OnInit {
  juego: Juego | undefined;
  juegos: Juego[] = [
    { id: 1, titulo: 'Juego 1', plataforma: 'PS5', genero: 'Acción', precio: 59.99, popular: true },
    { id: 2, titulo: 'Juego 2', plataforma: 'PC', genero: 'RPG', precio: 49.99, popular: false },
    { id: 3, titulo: 'Juego 3', plataforma: 'Xbox', genero: 'Shooter', precio: 69.99, popular: true },
    { id: 4, titulo: 'Juego 4', plataforma: 'Switch', genero: 'Aventura', precio: 39.99, popular: false },
    { id: 5, titulo: 'Juego 5', plataforma: 'PS5', genero: 'Deportes', precio: 54.99, popular: true }
  ];

  constructor(private route: ActivatedRoute, private navCtrl: NavController) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.juego = this.juegos.find(j => j.id === id);
  }

  irTienda() {
    this.navCtrl.navigateForward('/dashboard/tienda');
  }
}
