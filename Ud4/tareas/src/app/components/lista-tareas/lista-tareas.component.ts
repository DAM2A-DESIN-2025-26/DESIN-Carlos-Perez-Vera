import { Component, OnInit ,inject} from '@angular/core';
import { TareasService } from '../../services/tareas-service';
import { IonicModule } from '@ionic/angular';
import { TareaItemComponent } from '../tarea-item/tarea-item.component';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss'],
  standalone: true,
  imports: [IonicModule, TareaItemComponent],
})
export class ListaTareasComponent  implements OnInit {

  public tareasService = inject(TareasService);
  constructor() { }

  ngOnInit() {}
  
cambiarEstado(id: number) {
  this.tareasService.cambiarEstado(id);
}
}
