import { Component, signal } from '@angular/core';
import { Signal } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  imports: [],
  templateUrl: './habilidades.html',
  styleUrl: './habilidades.css',
})
export class Habilidades {

  habilidades = signal([
    { nombre: 'Angular', nivel: 80 },
    { nombre: 'TypeScript', nivel: 75 },
    { nombre: 'CSS', nivel: 60 },
    { nombre: 'Java', nivel: 85 }
  ]);

}
