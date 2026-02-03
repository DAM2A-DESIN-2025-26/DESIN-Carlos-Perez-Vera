import { Component, OnInit, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonItem, IonLabel, IonInput, IonButton, 
  IonButtons, IonBackButton, 
  IonTextarea
} from '@ionic/angular/standalone';
import { RecipeService } from '../../services/recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.page.html',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonItem, IonLabel, IonInput, IonButton, 
    IonButtons, IonBackButton, IonTextarea
  ]
})
export class RecipeEditPage implements OnInit {
  @Input() id?: string; // Recibe el ID de la URL automáticamente
  
  private fb = inject(FormBuilder);
  private recipeService = inject(RecipeService);
  private router = inject(Router);

  public recipeForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    ingredients: ['', [Validators.required]],
    instructions: ['', [Validators.required]],
    prepTimeMinutes: [0, [Validators.required, Validators.min(1)]]
  });

  ngOnInit() {
  if (this.id) {
    this.recipeService.getRecipeById(this.id).subscribe((recipe: any) => { // <--- AÑADE :any AQUÍ
      this.recipeForm.patchValue({
        name: recipe.name,
        ingredients: recipe.ingredients.join(', '), 
        instructions: recipe.instructions,
        prepTimeMinutes: recipe.prepTimeMinutes
      });
    });
  }
}

  actualizarReceta() {
    if (this.recipeForm.valid && this.id) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value).subscribe({
        next: (res) => {
          console.log('Receta actualizada:', res);
          this.router.navigate(['/home']);
        }
      });
    }
  }
}