import { Component ,inject,OnInit, signal } from '@angular/core';
import { IncidenciaInterface } from '../../interfaces/incidencia';
import { IncidenciaService } from '../../services/incidencias';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-incidencias',
  imports: [RouterLink],
  templateUrl: './incidencias.html',
  styleUrl: './incidencias.css',
})
export class Incidencias implements OnInit{
  private incidenciaService = inject(IncidenciaService);
  incidencias = signal<IncidenciaInterface[]>([]);

  ngOnInit(){
    this.incidenciaService.getIncidencias().subscribe(data=>{ this.incidencias.set(data);});
    this.incidenciaService.getIncidenciasAbiertas().subscribe(data => {this.incidenciasAbiertas.set(Object.values(data)[0]);});
  }
  incidenciasAbiertas = signal<number>(0);

  filtrarPorEstado(estado: string) {
    this.incidenciaService.getIncidenciasPorEstado(estado).subscribe(data => {
    this.incidencias.set(data);
    });
  }

  filtrarTodas(){
    this.incidenciaService.getIncidencias().subscribe(data=>{ this.incidencias.set(data);});
  }
}
