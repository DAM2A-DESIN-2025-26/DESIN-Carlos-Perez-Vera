import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons,
  IonBackButton, IonCard, IonCardHeader, IonCardTitle,
  IonCardContent, IonButton, IonList, IonItem, IonLabel,
  AlertController, ToastController
} from '@ionic/angular/standalone';
import { RecetasService, Receta } from '../../services/recetas';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle,
    IonCardContent, IonButton, IonList, IonItem, IonLabel
  ]
})
export class DetallePage implements OnInit {

  receta?: Receta;
  recetaId?: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recetasService: RecetasService,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    // Obtener el ID de la receta desde la URL
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.recetaId = parseInt(id);
      this.cargarReceta(this.recetaId);
    }
  }

  cargarReceta(id: number) {
    this.recetasService.getReceta(id).subscribe({
      next: (receta) => {
        this.receta = receta;
      },
      error: (error) => {
        console.error('Error al cargar receta:', error);
      }
    });
  }

  editarReceta() {
    this.router.navigate(['/crear-editar', this.recetaId]);
  }

  async eliminarReceta() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Estás seguro de eliminar esta receta?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            if (this.recetaId) {
              this.recetasService.eliminarReceta(this.recetaId).subscribe({
                next: async () => {
                  // Eliminar de la lista en memoria
                  const recetas = this.recetasService.recetas();
                  this.recetasService.recetas.set(
                    recetas.filter(r => r.id !== this.recetaId)
                  );
                  
                  // Mostrar toast
                  const toast = await this.toastController.create({
                    message: 'Receta eliminada',
                    duration: 2000,
                    color: 'success'
                  });
                  await toast.present();
                  
                  // Volver al listado
                  this.router.navigate(['/listado']);
                },
                error: (error) => {
                  console.error('Error al eliminar:', error);
                }
              });
            }
          }
        }
      ]
    });

    await alert.present();
  }
}