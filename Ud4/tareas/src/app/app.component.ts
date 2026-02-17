import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, ListaTareasComponent],
})
export class AppComponent {
  constructor() {}
}
