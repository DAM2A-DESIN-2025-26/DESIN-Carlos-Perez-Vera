import { Component, OnInit } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardContent, IonCardTitle, IonCardSubtitle,
  IonButton, IonButtons, IonChip, IonIcon,
  IonList, IonItem, IonLabel, IonNote,IonMenuButton
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular/standalone';

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
    RouterLink,IonMenuButton
    // NO ModalController aquí
  ],
})
export class JuegosPage implements OnInit {
  juegos: Juego[] = [ /* tu array ok */ ];
  juegosFiltrados: Juego[] = [];

  constructor(
    private route: ActivatedRoute, 
    private modalCtrl: ModalController  // ← Service por DI, ok
  ) {}

  ngOnInit() {
    this.juegosFiltrados = [...this.juegos];
  }

  async abrirVistaRapida(juego: Juego) {
    const { VistaRapidaPage } = await import('./vista-rapida/vista-rapida.page');
    const modal = await this.modalCtrl.create({
      component: VistaRapidaPage,
      componentProps: { juego }
    });
    await modal.present();
  }
}
