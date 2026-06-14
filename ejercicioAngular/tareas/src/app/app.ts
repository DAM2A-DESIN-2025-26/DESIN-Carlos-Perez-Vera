import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TareaList } from './components/tarea-list/tarea-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TareaList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tareas');
}
