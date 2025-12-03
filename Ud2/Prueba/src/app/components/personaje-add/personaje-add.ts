import { Component, output, signal } from '@angular/core';
import { Personaje } from '../../interfaces/personajes.interface';

@Component({
  selector: 'personaje-add',
  imports: [],
  templateUrl: './personaje-add.html',
  styleUrl: './personaje-add.scss',
})
export class PersonajeAdd {
name = signal('');
power = signal(0);

newPersonaje = output<Personaje>();

   crearPersonaje(){
    console.log(this.name(),this.power());
    const newPer: Personaje={
      id: Math.floor(Math.random() * 10000),
      name: this.name(),
      power: this.power()
    };

    this.newPersonaje.emit(newPer);
    //this.personaje.update( personajes => [...personajes, newPersonaje] );
    this.limpiarCampos();
  }

  limpiarCampos(){
    this.name.set('');
    this.power.set(0);

  }

}
