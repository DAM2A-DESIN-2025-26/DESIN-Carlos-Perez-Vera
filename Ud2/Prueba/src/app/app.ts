import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  //styleUrl: './app.scss'
})
export class App {
  /* Signal: señales, detecta los cambios y recarga */
  nombre = signal('Carlos ');
  apellido = 'Perez Vera';
}
