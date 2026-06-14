import { Component,signal,Signal } from '@angular/core';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {

  contador = signal(0);

  aumentarContador(){
    this.contador.update(valor => valor+1);
  }

}
