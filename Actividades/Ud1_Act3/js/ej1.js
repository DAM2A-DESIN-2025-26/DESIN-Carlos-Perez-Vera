


class centralMedidas{
    
    /* Contiene una tabla de enteros correspondientes a las medidas tomadas durante un mes en distintas ciudades. La primera columna almacenará el nombre de la ciudad.
    Inicialmente el array está vacío. */

     medidas =[];

     ciudad="";

     valores=0;

    constructor(medidas={}){
        this.medidas={};
    }

    get ciudad(){
        return this._ciudad;
    }

    get valores(){
        return this._valores
    }

/* Crea una nueva fila en la tabla de medidas correspondiente a la ciudad ciudad con los valores del array valores
    Devuelve verdadero si se ha podido insertar las medidas y falso si no (si la ciudad ya existe, o el segundo parámetro no
    contiene 30 valores). */

    insertarMedidas(ciudad,valores){

        if(!Array.isArray(valores) || valores.length != 30){
            return false;
        }

        for(let fila of this.medidas){
            if(file[0] === ciudad){
                return false;
            } 
        }

        this.medidas.push([ciudad, ...valores]);
    }

    /* Crea una nueva fila en la tabla de medidas correspondiente a la ciudad ciudad con valores aleatorios.
    Devuelve verdadero si se ha podido insertar las medidas y
    falso si no (si la ciudad ya existe). */

    insertaAleatorio(ciudad){
        if(this.medidas.some(fila => fila[0] == "Madrid")){
            return false;
        }
        
            
    }

    /* Devuelve la temperatura media de la ciudad indicada durante el
    mes */

    mediaMedia(ciudad){

    }

    /* Devuelve la temperatura media de todas las ciudades durante el
    mes */

    mediaMedidasTotal(){}

    

    /* Elimina las medidas de la ciudad. Devuelve verdadero si se ha podido eliminar la fila y falso si no
    (pues la ciudad no existe). */

    eliminaCiudad(ciudad){

    }

    /* Se muestran por consola las medidas correspondientes a cada
    ciudad. */

    toConsole() {}
    
    

    
}

