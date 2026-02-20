import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // Importante para usar etiquetas ion-
import { Tarea } from '../../interfaces/tarea.interface'; // Tu molde de datos

@Component({
  selector: 'app-tarea-item',
  templateUrl: './tarea-item.component.html',
  standalone: true,
  imports: [IonicModule] 
})
export class TareaItemComponent {
  // @Input permite que el padre le pase una tarea a este hijo
  @Input() tarea!: Tarea;

  // @Output es un "altavoz" para avisar al padre. 
  // EventEmitter<number> significa que vamos a enviar el ID de la tarea (un número)
  @Output() onCambiarEstado = new EventEmitter<number>();

  // Esta función se activa cuando el usuario toca el checkbox
  notificarCambio() {
    // "Emitimos" el ID de la tarea hacia el componente padre
    this.onCambiarEstado.emit(this.tarea.id);
  }
}