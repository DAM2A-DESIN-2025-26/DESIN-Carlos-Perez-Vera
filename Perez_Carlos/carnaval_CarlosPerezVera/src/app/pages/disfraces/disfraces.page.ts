


import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonList, IonItem, IonLabel, IonThumbnail, IonImg,
  IonRefresher, IonRefresherContent,
  IonButton, IonButtons, IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { DisfrazService } from '../../services/disfraz-service';
import { Disfraz } from './../../interfaces/difrazInterfaz';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-disfraces',
  templateUrl: 'disfraces.page.html',
  styleUrls: ['disfraces.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonList, IonItem, IonLabel, IonThumbnail, IonImg,
    IonRefresher, IonRefresherContent,
    IonButton, IonButtons, IonIcon
  ],
})
export class DisfracesPage implements OnInit {

  private disfrazService = inject(DisfrazService);
  public disfraces: any[] = [];


  constructor() {
    addIcons({ add });
   }



  ngOnInit() {
    this.cargarDisfraces();
  }

/* getDisfraces(): Observable<any> {
    return this.http.get(this.apiUrl);
  } */
   cargarDisfraces(event?: any) {
    this.disfrazService.getDisfraces().subscribe({
      next: (res: any) => {
        this.disfraces = res.disfraces;
        console.log('Disfraces cargados:', this.disfraces);

        if (event) {
          event.target.complete();
        }
      },
      error: (err: any) => {
        console.error('Error al cargar disfraces', err);
        if (event) {
          event.target.complete();
        }
      }
    });
  }
}
