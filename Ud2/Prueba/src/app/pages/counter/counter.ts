import { Component,signal } from "@angular/core";

@Component({
  selector: "app-contador",
  templateUrl: "./counter.html"
})

export class Counter {

  contador:number = 10;
  counterSignal = signal(10);

  cambiar(aumento: number){
    this.contador+=aumento;
  }

  reiniciar(){
    this.contador = 10;
  }
}
