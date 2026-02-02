import { Component, OnInit, inject } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonList, IonItem, IonLabel, IonThumbnail, IonImg,
  IonRefresher, IonRefresherContent // esto para el "Pull to refresh" 

} from '@ionic/angular/standalone';
import { RecipeService } from '../services/recipe'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonList, IonItem, IonLabel, IonThumbnail, IonImg,
    IonRefresher, IonRefresherContent
  ],
})
export class HomePage implements OnInit {
 
  private recipeService = inject(RecipeService);

  // V guardar la lista de recetas
  public recipes: any[] = [];

  constructor() {}

  ngOnInit() {
    this.cargarRecetas();
  }

  // Función para llamar al servicio
  cargarRecetas(event?: any) {
    this.recipeService.getRecipes().subscribe({
      next: (res: any) => {
        this.recipes = res.recipes;
        console.log('Recetas cargadas:', this.recipes);
        
        // Si la función fue llamada por el refrescador, se para
        if (event) {
          event.target.complete();
        }
      },
      error: (err: any) => {
        console.error('Error al cargar recetas', err);
        if (event) {
          event.target.complete();
        }
      }
    });
  }
}