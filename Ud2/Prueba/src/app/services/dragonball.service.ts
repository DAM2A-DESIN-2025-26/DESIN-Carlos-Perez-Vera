import { Injectable, signal } from '@angular/core';
import { Personaje } from '../interfaces/personajes.interface';

@Injectable({
  providedIn: 'root',
})
export class DragonballService {


   name = signal('Goku');
  power = signal(1500);

   agregarPersonaje( personaje: Personaje ){
    this.personaje.update( personajes => [...personajes, personaje] );
  }

  personaje= signal <Personaje[]>(
    [
      {id:1, name:'Goku', power:9900},
      {id:2, name:'Pikachu', power:7000},
      /*{id:3, name:'Piccolo', power:4000},*/
    ]
  )
}
