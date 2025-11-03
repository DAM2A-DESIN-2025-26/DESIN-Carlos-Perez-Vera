class Edificio{

    /* var edificios  new Array();
    edificios[0]=new Array() */

    #edificio={
    
    }

    #calle ="";
    #numero=0;
    #codigoPostal=0;
    #plantas=[];

    constructor(){
        this.#calle="";
        this.#numero=0;
        this.#codigoPostal=0;
    }


    agregarPlantasyPuertas(plantas,puertas){
         
         planta = parseInt(prompt("Cual es su planta?"));
        puerta = parseInt(prompt("Y su puerta?"));

        //crear plantas y puertas sin propietario:
        for(let i=0; i<this.#plantas;i++){
            let puertasPlanta=[];
            for(let j =0;j<puertas;j++){
                puertasPlanta.push(" ");
            }
            this.#plantas.push(puertasPlanta)

            console.log("Se han añadido " + plantas + " plantas y " + puertas + " puertas por planta.");
    }
    } 

    agregarPropietario(nombre,planta,puerta){
       
       
        }
         nombre=promt("Cual es el nombre del propietario?");
        
    }
    
    imprimePLantas(){
        if (this.#edificio.length === 0) {
      console.log("No hay datos para mostrar.");
      return;
    }

    for (let fila of this.#edificio) {
      let planta = fila[0];
      let puerta = fila[1];
      let nombre = fila[2]
      console.log("Planta: " + getComputedS);
      console.log("Puerta: " + puerta.join(", "));
      console.log("El propietario es: "+nombre.join(", "));
      console.log("\n");
      
    }
  
    }


    get calle(){
        return this.#calle;
    }

    set calle(c){
        this.#calle=c;
    }

    get numero(){
        return this.#numero;
    }
    set numero(n){
        this.#numero=n;
    }

    get codigoPostal(){
        return this.#codigoPostal;
    }
    set codigoPostal(cp){
        this.#codigoPostal=cp;
    }
    
    

 
    
}