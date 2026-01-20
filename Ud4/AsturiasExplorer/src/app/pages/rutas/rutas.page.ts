import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/angular/standalone';
import { RutaService } from './ruta.service';
import { Ruta } from './ruta.model';

@Component({
  selector: 'app-rutas',
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel
  ],
  templateUrl: './rutas.page.html',
  styleUrls: ['./rutas.page.scss'],
})
export class RutasPage implements OnInit {
  rutas: Ruta[] = [];

  constructor(private rutaService: RutaService) { }

  ngOnInit() {
    this.rutas = this.rutaService.obtenerRutas();
  }
}
