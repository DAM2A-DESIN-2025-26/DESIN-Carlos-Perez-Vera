import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { MainComponent } from '../../components/main/main.component';
import { FooterComponent } from '../../components/footer/footer.component';

import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonGrid, IonRow, IonCol, IonIcon } from '@ionic/angular/standalone';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,NavbarComponent, HeaderComponent, MainComponent, FooterComponent,IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonGrid, IonRow, IonCol, IonIcon,RouterLink]
})
export class InicioPage implements OnInit {

  constructor() { }

  titulo:string="Bienvenido a Asturias Explorer";
  descripcion:string="Descubre paisajes únicos y sabores auténticos";

  tituloBienvenida: string = "Bienvenido a AsturiasExplorer";
  textoBienvenida: string = "Tu guía para descubrir el paraíso natural";

  ngOnInit() {
  }

}
