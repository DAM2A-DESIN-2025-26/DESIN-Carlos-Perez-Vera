import { Component } from '@angular/core';

@Component({
  selector: 'app-sobremi',
  imports: [],
  templateUrl: './sobremi.html',
  styleUrl: './sobremi.css',
})
export class Sobremi {

  nombre:string="Carlos Perez Vera"
  edad:number=21;
  hobbies:string[]=["Nadar","Patinar","Programar","Entrenar","Pintar"];

}
