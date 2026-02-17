import { Component, OnInit ,input,output} from '@angular/core';
import { Tarea } from 'src/app/services/tareas-service';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-tarea-item',
  templateUrl: './tarea-item.component.html',
  styleUrls: ['./tarea-item.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class TareaItemComponent  implements OnInit {

  // Recibimos la tarea del padre
  tarea = input.required<Tarea>();

  // Creamos un evento para avisar al padre cuando cambie el checkbox
  cambioEstado = output<number>();

  onCheckboxChange() {
    // Avisamos al padre enviando el ID de la tarea
    this.cambioEstado.emit(this.tarea().id);
  }
  constructor() { }

  ngOnInit() {}

}
