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
import { RecipeService } from '../services/recipe'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
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
export class HomePage implements OnInit {
  private recipeService = inject(RecipeService);
  public recipes: any[] = [];

  constructor() {
    addIcons({ add });
  }

  ngOnInit() {
    this.cargarRecetas();
  }

  // --- ESTA ES LA FUNCIÓN QUE DEBES MODIFICAR ---
  cargarRecetas(event?: any) {
    this.recipeService.getRecipes().subscribe({
      next: (res: any) => { // <--- Aquí añadimos :any
        this.recipes = res.recipes;
        console.log('Recetas cargadas:', this.recipes);
        
        if (event) {
          event.target.complete();
        }
      },
      error: (err: any) => { // <--- Aquí también añadimos :any
        console.error('Error al cargar recetas', err);
        if (event) {
          event.target.complete();
        }
      }
    });
  }
}