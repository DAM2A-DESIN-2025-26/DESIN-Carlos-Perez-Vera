import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { IonList, IonItem, IonLabel } from '@ionic/angular/standalone';

interface Ruta {
  nombre: string;
  zona: string;
  dificultad: string;
  imagen: string;
}

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.page.html',
  styleUrls: ['./rutas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,HeaderComponent,FooterComponent,IonList, IonItem, IonLabel]
})
export class RutasPage implements OnInit {

  constructor() { }

  titulo:string="Las mejores Rutas en Asturias";
  descripcion:string="Descubre paisajes únicos y auténticos";

  rutas: Ruta[] = [
  {
    nombre: 'Ruta del Cares',
    zona: 'Picos de Europa',
    dificultad: 'Media',
    imagen: 'URL_IMAGEN_AQUI'
  },
  {
    nombre: 'Ruta del Berron',
    zona: 'Picos de Europa',
    dificultad: 'Baja',
    imagen: 'URL_IMAGEN_AQUI'
  },
  {
    nombre: 'Ruta del Cañon',
    zona: 'Nubledo',
    dificultad: 'Alta',
    imagen: 'URL_IMAGEN_AQUI'
  },
  {
  nombre: 'Lagos de Covadonga',
  zona: 'Picos de Europa',
  dificultad: 'Fácil',
  imagen: 'URL_IMAGEN_AQUI'
  }
  
];

  ngOnInit() {
  }

}
