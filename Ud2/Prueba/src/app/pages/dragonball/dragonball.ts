import { Component, signal } from '@angular/core';
import { Personaje } from '../../interfaces/personajes.interface';
import { PersonajesList } from '../../components/personajes-list/personajes-list';




@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball.html',

})
export class Dragonball {

  name = signal('Goku');
  power = signal(1500);


  personaje= signal <Personaje[]>(
    [
      {id:1, name:'Goku', power:9900},
      {id:2, name:'Pikachu', power:7000},
      /* {id:3, name:'Piccolo', power:4000}, */
    ]
  )

     pintarValores(){
      console.log(this.name(),this.power());
      const newPersonaje: Personaje={
        id: this.personaje().length +1,
        name: this.name(),
        power: this.power()
      };
      this.personaje.update( personajes => [...personajes, newPersonaje] );
    }

    limpiarCampos(){
      this.name.set('');
      this.power.set(0);

    }

  }

