import { Component,inject,OnInit,signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IncidenciaService } from '../../services/incidencias';
import { IncidenciaInterface } from '../../interfaces/incidencia';


@Component({
  selector: 'app-incidencias-detalle',
  imports: [RouterLink],
  templateUrl: './incidencias-detalle.html',
  styleUrl: './incidencias-detalle.css',
})
export class IncidenciasDetalle implements OnInit {

   // 1. Inyecciones — fuera del ngOnInit
  private route = inject(ActivatedRoute);
  private incidenciaService = inject(IncidenciaService);

  // 2. Signals — fuera del ngOnInit
  incidencia = signal<IncidenciaInterface | null>(null);

  // 3. ngOnInit — aquí van los const y las llamadas
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // llama al servicio con ese id y mete el resultado en la signal
    this.incidenciaService.getIncidenciasById(id).subscribe(data => {this.incidencia.set(data);});
  }
}
