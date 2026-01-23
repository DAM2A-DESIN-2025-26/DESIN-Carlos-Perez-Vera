import { Component, OnInit } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardContent, IonCardTitle, IonCardSubtitle,
  IonButton, IonButtons, IonChip, IonIcon,
  IonList, IonItem, IonLabel, IonNote
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';  // ← Solo CommonModule
import { RouterLink } from '@angular/router';  // ← RouterLink aquí
import { ActivatedRoute } from '@angular/router';

interface Juego {
  id: number;
  titulo: string;
  plataforma: string;
  genero: string;
  precio: number;
  popular: boolean;
}

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.page.html',
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardContent, IonCardTitle, IonCardSubtitle,
    IonButton, IonButtons, IonChip, IonIcon,
    IonList, IonItem, IonLabel, IonNote,
    RouterLink  // ← OK ahora
  ],
})
export class JuegosPage implements OnInit {
  juegos: Juego[] = [ /* tus 5 juegos */ ];
  juegosFiltrados: Juego[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.juegosFiltrados = [...this.juegos];
    // Filtro state igual...
  }

  abrirVistaRapida(juego: Juego) {
    console.log('Modal con:', juego);
  }
}
