import { Component,inject } from '@angular/core';
import { TareasService } from '../../services/tareas';
import { NgForOf } from '@angular/common';
import { TareaItem } from '../tarea-item/tarea-item';

@Component({
  selector: 'app-tarea-list',
  imports: [NgForOf,TareaItem],
  templateUrl: './tarea-list.html',
  styleUrl: './tarea-list.css',
})
export class TareaList {

  //Acceso al servicio
  tareaService = inject(TareasService);

  //Acceso al signal
  tareaSignal = this.tareaService.tareas;

  cambiarEstado(id: number) {
    // recibe una función que toma el valor actual de la signal (tareasActuales) y devuelve el nuevo array.
  this.tareaSignal.update(tareasActuales =>
    tareasActuales.map(tarea => {
      if (tarea.id === id) {
        // devolvemos una copia de la tarea con completed invertido
        return { ...tarea, completed: !tarea.completed };
      } else {
        // las demás tareas se devuelven igual
        return tarea;
      }
    })
  );
  }
}
