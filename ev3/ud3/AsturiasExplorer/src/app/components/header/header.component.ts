import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [ IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon]
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  titulo:string="Descubre el Paraíso Natural";
  subtitulo:string="Montañas, playas y cultura asturiana";

  ngOnInit() {}

}
