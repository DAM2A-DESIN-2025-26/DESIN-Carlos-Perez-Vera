import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, 
  IonButtons, IonMenuButton, IonSegment, IonSegmentButton, 
  IonLabel, IonList, IonItem, IonThumbnail 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, 
    IonButtons, IonMenuButton, IonSegment, IonSegmentButton, 
    IonLabel, IonList, IonItem, IonThumbnail, 
    CommonModule, FormsModule
  ]
})
export class TiendaPage implements OnInit {

  plataformaSeleccionada: string = 'Todos';

  // La misma lista que en juegos 
  listaDeJuegos = [
    { id: 1, titulo: 'Zelda', plataforma: 'Switch', imagen: 'https://placehold.co/100x100?text=Zelda' },
    { id: 2, titulo: 'Elden Ring', plataforma: 'PS5', imagen: 'https://placehold.co/100x100?text=Elden' },
    { id: 3, titulo: 'Halo', plataforma: 'Xbox', imagen: 'https://placehold.co/100x100?text=Halo' },
    { id: 4, titulo: 'Cyberpunk', plataforma: 'PC', imagen: 'https://placehold.co/100x100?text=PC' },
    { id: 5, titulo: 'Stardew Valley', plataforma: 'PC', imagen: 'https://placehold.co/100x100?text=PC' },
  ];

  constructor() {}

  ngOnInit() {}

  // Función para cambiar el filtro
  cambiarFiltro(evento: any) {
    this.plataformaSeleccionada = evento.detail.value;
  }

  // Función para filtrar la lista según la selección
  get juegosFiltrados() {
    if (this.plataformaSeleccionada === 'Todos') {
      return this.listaDeJuegos;
    }
    return this.listaDeJuegos.filter(juego => juego.plataforma === this.plataformaSeleccionada);
  }
}