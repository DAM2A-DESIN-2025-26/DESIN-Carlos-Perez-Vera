import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
  IonImg,
  IonText
} from '@ionic/angular/standalone';
import { GastronomiaService } from './gastronomia.service';
import { Gastronomia } from './gastro.model';

@Component({
  selector: 'app-gastro',
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    IonImg,
    IonText
  ],
  templateUrl: './gastro.page.html',
  styleUrls: ['./gastro.page.scss'],
})
export class GastroPage implements OnInit {
  gastronomias: Gastronomia[] = [];

  constructor(private gastronomiaService: GastronomiaService) { }

  ngOnInit() {
    this.gastronomias = this.gastronomiaService.obtenerGastronomias();
  }
}
