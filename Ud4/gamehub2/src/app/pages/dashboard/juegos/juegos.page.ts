import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, 
  IonButtons, IonMenuButton, IonList, IonItem, 
  IonLabel, IonThumbnail, IonButton, IonIcon ,IonText
} from '@ionic/angular/standalone';

import { NavController } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { eyeOutline, cartOutline } from 'ionicons/icons';

interface Juego {
  id: number;
  titulo: string;
  plataforma: string;
  genero: string;
  precio: number;
  popularidad: 'Alta' | 'Media' | 'Baja';
  imagen: string;
}

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.page.html',
  styleUrls: ['./juegos.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, 
    IonButtons, IonMenuButton, IonList, IonItem, 
    IonLabel, IonThumbnail, IonButton, IonIcon,
    CommonModule, FormsModule,IonText
  ]
})
export class JuegosPage implements OnInit {
  
  listaDeJuegos: Juego[] = [
    { id: 1, titulo: 'Zelda: Echoes of Wisdom', plataforma: 'Switch', genero: 'Aventura', precio: 59.99, popularidad: 'Alta', imagen: 'https://placehold.co/100x100?text=Zelda' },
    { id: 2, titulo: 'Elden Ring', plataforma: 'PS5', genero: 'RPG', precio: 69.99, popularidad: 'Alta', imagen: 'https://placehold.co/100x100?text=Elden' },
    { id: 3, titulo: 'Halo Infinite', plataforma: 'Xbox', genero: 'Shooter', precio: 39.99, popularidad: 'Media', imagen: 'https://placehold.co/100x100?text=Halo' },
    { id: 4, titulo: 'Cyberpunk 2077', plataforma: 'PC', genero: 'RPG', precio: 49.99, popularidad: 'Alta', imagen: 'https://placehold.co/100x100?text=CP2077' },
    { id: 5, titulo: 'Stardew Valley', plataforma: 'PC', genero: 'Simulación', precio: 14.99, popularidad: 'Baja', imagen: 'https://placehold.co/100x100?text=Stardew' },
  ];

  constructor(private navCtrl: NavController) {
    addIcons({ eyeOutline, cartOutline });
    
  }

  ngOnInit() {

  }

  verDetalle(juego: Juego) {
  this.navCtrl.navigateForward(['/juego-detalle'], {
    queryParams: { 
      nombre: juego.titulo,
      precio: juego.precio 
    }
  });
}

  abrirVistaRapida(juego: Juego) {
    console.log('Abriendo vista rápida de:', juego.titulo);
  }
}