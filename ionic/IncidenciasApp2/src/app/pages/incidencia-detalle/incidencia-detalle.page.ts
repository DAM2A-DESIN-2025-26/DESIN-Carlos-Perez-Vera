import { Component, OnInit,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButton } from '@ionic/angular/standalone';
import { IncidenciaInterface } from 'src/app/interfaces/incidencia';
import { IncidenciasService } from 'src/app/services/incidencias';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-incidencia-detalle',
  templateUrl: './incidencia-detalle.page.html',
  styleUrls: ['./incidencia-detalle.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButton,RouterLink]
})
export class IncidenciaDetallePage implements OnInit {

  private route = inject(ActivatedRoute);
  private incidenciaService = inject(IncidenciasService);

  /*  variable tipada donde luego cargaremos la incidencia concreta según el id */
  incidencia !: IncidenciaInterface;

  constructor() { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    if(id){
      /*  El + delante de id se usa para convertirlo de texto a número */
      this.incidenciaService.getIncidenciaById(+id).subscribe({
        next: (data) => {
          this.incidencia = data;
        },
        error: (error) => {
          console.error(error);
        }
      })
    }
  }

}
