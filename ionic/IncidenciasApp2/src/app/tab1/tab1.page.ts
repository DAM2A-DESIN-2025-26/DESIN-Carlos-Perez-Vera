import { Component,OnInit,inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList,IonItem , IonLabel} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IncidenciasService } from '../services/incidencias';
import { IncidenciaInterface } from '../interfaces/incidencia';
import { RouterLink,Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, ExploreContainerComponent, IonList,IonItem,IonLabel,RouterLink],
})
export class Incidencias implements OnInit{

  incidenciaService = inject(IncidenciasService);

  incidencias: IncidenciaInterface[] = [];
  incidenciasAbiertas:number=0;

  router = inject(Router);

  ngOnInit() {
    this.cargarIncidencias();
    this.cargarAbiertas();
  }
  constructor() {}

  cargarIncidencias() {
  this.incidenciaService.getIncidenciasOrdenadasPrioridad().subscribe({
    next: (data) => {
      this.incidencias = data;
    },
    error: (error) => {
      console.error(error);
    }
  });
}
  cargarAbiertas(){
    this.incidenciaService.contarAbiertas().subscribe({
      next: (data) => {
        console.log('ABIERTAS', data);
      this.incidenciasAbiertas = data.abiertas;
    },
    error: (error) => {
      console.error(error);
    }
    })
  }

filtrarPorEstado(estado: string) {
  if (estado === 'todas') {
    this.cargarIncidencias();
    return;
  }

  this.incidenciaService.getIncidenciasPorEstado(estado).subscribe({
    next: (data) => {
      this.incidencias = data;
    },
    error: (error) => {
      console.error(error);
    }
  });
}

eliminarIncidenciaDesdeBoton(event: Event, id: number) {
  event.preventDefault();
  event.stopPropagation();

  const confirmar = confirm('¿Seguro que quieres eliminar esta incidencia?');
  if (!confirmar) return;

  this.incidenciaService.eliminarIncidencia(id).subscribe({
    next: () => {
      this.incidencias = this.incidencias.filter(incidencia => incidencia.id !== id);
    },
    error: (error) => {
      console.error(error);
    }
  });
}

editarIncidencia(event: Event, id: number) {
  event.preventDefault();
  event.stopPropagation();
  this.router.navigate(['/tabs/incidencia-editar', id]);
}

}
