import { Component, signal } from '@angular/core';
import { Signal } from '@angular/core';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {

  nombre=signal('');
  email=signal('');
  mensaje=signal('');

   enviado = signal(false);

  enviarFormulario() {
    this.enviado.set(true);
  }
}
