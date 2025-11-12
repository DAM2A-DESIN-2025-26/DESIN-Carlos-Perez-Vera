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


    agregarPlantasyPuertas(){
         
        let planta = parseInt(prompt("Cual es su planta?"));
        let puerta = parseInt(prompt("Y su puerta?"));

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

    agregarPropietario(){
        let planta = parseInt(prompt("Cual es la planta?"));
        let puerta = parseInt(prompt("Cual es su puerta?"));
         nombre=(promt("Cual es el nombre del propietario?"));

        if(planta < 0 || planta > this.#plantas.length){
            console.log("La planta no existe");
            return;
        }

        if(puerta < 0 || puerta < this.#plantas[planta].length){
            console.log("La puerta no existe");
            return;
        }

        this.#plantas[planta],[puerta] = nombre;
        console.log("El vecino: "+nombre+" vive en la planta nº "+planta+" y en la puerta nº: "+puerta)

        
    }
    
    imprimePLantas(){
       for(let i =0; i < this.#plantas.lenght; i ++){
            for(let j = 0 ; j<this.#plantas[i].lenght;j++){
                let propietario = this.#plantas[i][j];
                if(propietario===""){
                    propietario="Vacio";
                }
            }
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