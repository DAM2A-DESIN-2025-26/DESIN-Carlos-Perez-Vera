import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons,
  IonBackButton, IonItem, IonLabel, IonInput, IonSelect,
  IonSelectOption, IonTextarea, IonButton,
  ToastController
} from '@ionic/angular/standalone';
import { RecetasService } from '../../services/recetas';

@Component({
  selector: 'app-crear-editar',
  templateUrl: './crear-editar.page.html',
  styleUrls: ['./crear-editar.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, ReactiveFormsModule,
    IonButtons, IonBackButton, IonItem, IonLabel, IonInput, IonSelect,
    IonSelectOption, IonTextarea, IonButton
  ]
})
export class CrearEditarPage implements OnInit {

  recetaForm: FormGroup;
  recetaId?: number;
  modoEdicion = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private recetasService: RecetasService,
    private toastController: ToastController
  ) {
    // Crear formulario reactivo con validaciones
    this.recetaForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      difficulty: ['', Validators.required],
      prepTimeMinutes: [0, [Validators.required, Validators.min(1)]],
      cookTimeMinutes: [0, [Validators.required, Validators.min(0)]],
      ingredients: ['', Validators.required],
      instructions: ['', Validators.required]
    });
  }

  ngOnInit() {
    // Verificar si estamos editando (hay ID en la URL)
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.recetaId = parseInt(id);
      this.modoEdicion = true;
      this.cargarReceta(this.recetaId);
    }
  }

  cargarReceta(id: number) {
    this.recetasService.getReceta(id).subscribe({
      next: (receta) => {
        // Pre-rellenar el formulario con los datos de la receta
        this.recetaForm.patchValue({
          name: receta.name,
          difficulty: receta.difficulty,
          prepTimeMinutes: receta.prepTimeMinutes,
          cookTimeMinutes: receta.cookTimeMinutes,
          ingredients: receta.ingredients.join(', '),
          instructions: receta.instructions.join('\n')
        });
      },
      error: (error) => {
        console.error('Error al cargar receta:', error);
      }
    });
  }

  async guardarReceta() {
    if (this.recetaForm.valid) {
      const formValue = this.recetaForm.value;
      
      // Preparar datos para enviar a la API
      const recetaData = {
        name: formValue.name,
        difficulty: formValue.difficulty,
        prepTimeMinutes: formValue.prepTimeMinutes,
        cookTimeMinutes: formValue.cookTimeMinutes,
        ingredients: formValue.ingredients.split(',').map((i: string) => i.trim()),
        instructions: formValue.instructions.split('\n').filter((i: string) => i.trim())
      };

      if (this.modoEdicion && this.recetaId) {
        // Actualizar receta existente
        this.recetasService.actualizarReceta(this.recetaId, recetaData).subscribe({
          next: async (recetaActualizada) => {
            // Actualizar en la lista
            const recetas = this.recetasService.recetas();
            const index = recetas.findIndex(r => r.id === this.recetaId);
            if (index !== -1) {
              recetas[index] = recetaActualizada;
              this.recetasService.recetas.set([...recetas]);
            }
            
            await this.mostrarToast('Receta actualizada');
            this.router.navigate(['/detalle', this.recetaId]);
          },
          error: (error) => {
            console.error('Error al actualizar:', error);
          }
        });
      } else {
        // Crear nueva receta
        this.recetasService.crearReceta(recetaData).subscribe({
          next: async (nuevaReceta) => {
            // Añadir a la lista
            const recetas = this.recetasService.recetas();
            this.recetasService.recetas.set([nuevaReceta, ...recetas]);
            
            await this.mostrarToast('Receta creada');
            this.router.navigate(['/listado']);
          },
          error: (error) => {
            console.error('Error al crear:', error);
          }
        });
      }
    }
  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      color: 'success'
    });
    await toast.present();
  }
}