import { Component, signal } from '@angular/core';
import { PersonajesList } from '../../components/personajes-list/personajes-list';
import { PersonajeAdd } from '../../components/personaje-add/personaje-add';


export interface Personaje{
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball',
  imports: [PersonajesList,PersonajeAdd],
  templateUrl: './dragonballSuper.html',
  //styleUrl: './dragonball.scss',
})
export class DragonballSuper {

  name = signal('Goku');
  power = signal(1500);

  agregarPersonaje( personaje: Personaje ){
    this.personaje.update( personajes => [...personajes, personaje] );
  }

  personaje= signal <Personaje[]>(
    [
      /* {id:1, name:'Goku', power:9900},
      {id:2, name:'Pikachu', power:7000}, */
      {id:3, name:'Piccolo', power:4000},
    ]
  )



  }

