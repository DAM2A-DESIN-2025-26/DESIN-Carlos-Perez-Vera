import { Component,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-incidencia-detail',
  imports: [],
  templateUrl: './incidencia-detail.html',
  styleUrl: './incidencia-detail.css',
})
export class IncidenciaDetail {
  route = inject(ActivatedRoute);
  id = this.route.snapshot.paramMap.get('id');
  incidencia = incidencias.find(i => i.id == this.id);
}
