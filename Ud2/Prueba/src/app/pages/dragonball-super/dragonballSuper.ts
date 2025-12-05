import { DragonballService } from './../../services/dragonball.service';
import { Component, inject, signal } from '@angular/core';
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

 

  DragonballService = inject(DragonballService);





  }

