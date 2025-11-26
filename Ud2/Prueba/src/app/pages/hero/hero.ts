import { Component,computed,signal } from "@angular/core";



@Component({
  templateUrl: './hero.html',

})
export class Hero {
name = signal('Carlos');
age = signal('30');

heroDescription= computed(() => `${this.name()} - ${this.age()} `);
getHeroDescription(){
  return `${this.name()}  ${this.age()} `;
}

changeHero(){

  this.name.set('Spiderman');
  this.age.set('25');
}

resetForm(){
  this.name.set('Ironman');
  this.age.set('45');
}

changeEdad(){
  this.age.set('33');
}
}
