 
class Sucesor extends Persona {

    constructor (nombre,apellidos,tieneMoto=false) {
        super(nombre,apellidos);

        this.tieneMoto=tieneMoto;
    }

    desplazarse (puntoA,puntoB){
        if(this.tieneMoto===false){
            console.log(`${this.nombre} se desplazara en moto de ${puntoA} a ${puntoB}`)
        }else{
            console.log(`${this.nombre} se desplazara andando de ${puntoA} a ${puntoB}`)
        }
    }
}
class Progenitor extends Persona {

    constructor(nombre,apellidos,tineCoche=false) {
        super(nombre,apellidos)
        this.tieneCoche=false;
    }

    

    desplazarse (puntoA,puntoB){
        if(this.tieneCoche===false){
            console.log(`${this.nombre} se desplazara en Coche de ${puntoA} a ${puntoB}`)
        }else{
            console.log(`${this.nombre} se desplazara andando de ${puntoA} a ${puntoB}`)
        }
    }

    comer (){
        console.log(`Me llamo ${this.nombre} y estoy comiendo huevos.`);
    }
}

const hijo1 = new Sucesor("Juan","Rodriguez");
hijo1.desplazarse("Madrid","Valencia");

const hijo2 = new Sucesor("Julio","Roberto Mata",true);
hijo2.desplazarse("Oviedo","Gijon");

const padre1 = new Progenitor("Alfredo","Rodriguez");
padre1.desplazarse("Madrid","Valencia");
padre1.comer();

const padre2 = new Progenitor("Pedro","Mata",true);
padre2.desplazarse("Oviedo","Gijon");
padre2.comer();