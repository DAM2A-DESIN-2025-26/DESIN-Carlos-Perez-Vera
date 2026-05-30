import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, 
  IonList, IonItem, IonThumbnail, IonLabel, 
  IonFab, IonFabButton, IonIcon, IonRefresher, 
  IonRefresherContent 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { RecetasService, Receta } from '../../services/recetas';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    IonList, IonItem, IonThumbnail, IonLabel, IonFab, IonFabButton, 
    IonIcon, IonRefresher, IonRefresherContent, RouterLink
  ]
})
export class ListadoPage implements OnInit {

  constructor(
    public recetasService: RecetasService,
    private router: Router
  ) {
    addIcons({ add });
  }

  ngOnInit() {
    this.cargarRecetas();
  }

  cargarRecetas() {
    this.recetasService.getRecetas().subscribe({
      next: (response) => {
        this.recetasService.recetas.set(response.recipes);
      },
      error: (error) => {
        console.error('Error al cargar recetas:', error);
      }
    });
  }

  handleRefresh(event: any) {
    this.cargarRecetas();
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  verDetalle(id: number) {
    this.router.navigate(['/detalle', id]);
  }

  crearReceta() {
    this.router.navigate(['/crear-editar']);
  }
}