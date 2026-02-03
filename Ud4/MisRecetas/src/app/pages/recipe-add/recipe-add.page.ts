import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonItem, IonLabel, IonInput, IonButton, 
  IonButtons, IonBackButton 
} from '@ionic/angular/standalone';
import { RecipeService } from '../../services/recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.page.html',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonItem, IonLabel, IonInput, IonButton, 
    IonButtons, IonBackButton
  ]
})
export class RecipeAddPage {
  private fb = inject(FormBuilder);
  private recipeService = inject(RecipeService);
  private router = inject(Router);

  //formulario con validaciones
  public recipeForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    ingredients: ['', [Validators.required]],
    instructions: ['', [Validators.required]],
    prepTimeMinutes: [0, [Validators.required, Validators.min(1)]]
  });

  guardarReceta() {
    if (this.recipeForm.valid) {
      this.recipeService.addRecipe(this.recipeForm.value).subscribe({
        next: (res) => {
          console.log('Receta creada:', res);
          this.router.navigate(['/home']); // Volver al inicio
        },
        error: (err) => console.error('Error al crear', err)
      });
    }
  }
}