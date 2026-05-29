import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-gastro',
  templateUrl: './gastro.page.html',
  styleUrls: ['./gastro.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,HeaderComponent,FooterComponent,IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton ]
})
export class GastroPage implements OnInit {

  constructor() { }

  nombrePlato: string = "Fabada Asturiana";
  descripcionPlato: string = "El plato más emblemático de Asturias...";

  ngOnInit() {
  }

}
