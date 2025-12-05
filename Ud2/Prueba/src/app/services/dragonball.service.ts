import { inject, Injectable, signal } from '@angular/core';
import { Personaje } from '../interfaces/personajes.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DragonballService {

  private http = inject(HttpClient);
  private urlApi= "https://teams.microsoft.com/l/message/19:8a71a88fe3c34512bad0e0bbc73fce60@thread.tacv2/1764947266520?tenantId=88a36e3b-d79f-4a2b-8db6-4c06d0973821&groupId=1d3da880-60ad-48fe-9470-053b66cd590a&parentMessageId=1764947266520&teamName=DAM2%2025-26&channelName=DESIN&createdTime=1764947266520&ngc=true";


  cargarPersonajes() {
    this.http.get<any>(this.urlApi).subscribe({
      next: (resp)  => {

        const lista = resp.map((valor:any, indes:number)=>{

          return {
            id: Number(valor.id),
            name: valor.name,
            power: valor.ki
          }
          this.personaje.set(lista);

        })

        console.log(resp);

      },

      error: (err) => {
        console.log('Error en la carga de personajes');
      }


    })

  }



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
