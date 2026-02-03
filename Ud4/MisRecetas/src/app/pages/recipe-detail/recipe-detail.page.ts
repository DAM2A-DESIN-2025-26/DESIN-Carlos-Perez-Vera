import { Component, OnInit, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonButtons, IonBackButton, IonCard, IonCardHeader, 
  IonCardTitle, IonCardContent, IonImg, IonText,
  IonButton, IonSpinner, AlertController 
} from '@ionic/angular/standalone';
import { RecipeService } from '../../services/recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonButtons, IonBackButton, IonCard, IonCardHeader, 
    IonCardTitle, IonCardContent, IonImg, IonText,
    IonButton, IonSpinner
  ]
})
export class RecipeDetailPage implements OnInit {
  @Input() id?: string; 
  private recipeService = inject(RecipeService);
  private alertCtrl = inject(AlertController); 
  private router = inject(Router);
  public recipe: any;

  ngOnInit() {
    if (this.id) {
      this.recipeService.getRecipeById(this.id).subscribe((res: any) => {
        this.recipe = res;
      });
    }
  }

  async eliminarReceta() {
    const alert = await this.alertCtrl.create({
      header: '¿Borrar receta?',
      message: '¿Estás seguro de que quieres eliminar esta receta?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            if (this.id) {
              this.recipeService.deleteRecipe(this.id).subscribe({
                next: () => this.router.navigate(['/home']),
                error: (err: any) => console.error(err)
              });
            }
          }
        }
      ]
    });
    await alert.present();
  }
}