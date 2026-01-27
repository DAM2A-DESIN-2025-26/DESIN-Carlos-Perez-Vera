import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, 
  IonList, IonItem, IonLabel, IonBadge, IonIcon 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { trophyOutline, flashOutline, starOutline } from 'ionicons/icons';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.page.html',
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, 
    IonList, IonItem, IonLabel, IonBadge, IonIcon, 
    CommonModule
  ]
})
export class EstadisticasPage implements OnInit {

  // Lista de logros 
  misLogros = [
    { titulo: 'Coleccionista', valor: 'Oro', color: 'warning' },
    { titulo: 'Velocidad', valor: 'Plata', color: 'medium' },
    { titulo: 'Novato', valor: 'Bronce', color: 'tertiary' },
    { titulo: 'Nivel Actual', valor: '42', color: 'success' }
  ];

  constructor() {
    addIcons({ trophyOutline, starOutline });
  }

  ngOnInit() {}
}