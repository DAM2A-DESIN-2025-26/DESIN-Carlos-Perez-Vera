import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';
import { YesnoService } from 'src/app/services/yesno';
import { YesnoResponse } from 'src/app/services/yesno';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle]
})
export class HomePage implements OnInit {

  pregunta: string = '';
  respuesta?: YesnoResponse;  // Opcional - al inicio no existe

  constructor(private yesnoService: YesnoService) {}

  ngOnInit() {

  }

  obtenerRespuesta() {
  if (this.pregunta.trim() === '') {
    // Si está vacía, no hacer nada
    return;
  }
  
  // Llamar al servicio
  this.yesnoService.obtenerRespuesta().subscribe({
    next: (respuesta) => {
      // Guardar la respuesta
      this.respuesta = respuesta;
    },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }

  nuevaPregunta() {
    this.pregunta = '';
    this.respuesta = undefined;
  }

}
