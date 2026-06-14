import { Component } from '@angular/core';
import { Input,Output } from '@angular/core';
import { TareasService } from '../../services/tareas';
import { TareasInterface } from '../../interfaces/tareas';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tarea-item',
  imports: [],
  templateUrl: './tarea-item.html',
  styleUrl: './tarea-item.css',
})
export class TareaItem {

  //! = propiedd obligatoria
  //El hijo recibe la tarea
  @Input()
  tarea !: TareasInterface;

  // crea un evento personalizado del componente hijo llamado estadoCambiado, y cada vez que lo uses con .emit(...) mandarás un number al padre.
  @Output()
  estadoCambiado = new EventEmitter<number>();

  cambio(){
    this.estadoCambiado.emit(this.tarea.id);
  }
}

