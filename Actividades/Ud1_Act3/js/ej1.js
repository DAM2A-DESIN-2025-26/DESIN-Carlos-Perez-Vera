
/* Contiene una tabla de enteros correspondientes a las medidas tomadas durante un mes en distintas ciudades. La primera columna almacenará el nombre de la ciudad.
    Inicialmente el array está vacío. */

class CentralMedidas{
    
  
    constructor() {
    
    this._medidas = [];
  }

  get medidas() {
    return this._medidas;
  }

  set medidas(nuevasMedidas) {
    this._medidas = nuevasMedidas;
  }

/* Crea una nueva fila en la tabla de medidas correspondiente a la ciudad ciudad con los valores del array valores
    Devuelve verdadero si se ha podido insertar las medidas y falso si no (si la ciudad ya existe, o el segundo parámetro no
    contiene 30 valores). */

    insertarMedidas(ciudad,valores){

        for(let fila of this._medidas){
            if(fila[0]==ciudad){
                console.log("La ciudad ya existe.");
                return false;
            }
            
            }
            
        if(valores.length != 30){
                console.log("Introduzca solo 30 valores.");
                return false;
        }
        this._medidas.push([ciudad, valores])
            console.log("Medidas añadidas para " + ciudad);
            return true;
    }
    


    /* Crea una nueva fila en la tabla de medidas correspondiente a la ciudad ciudad con valores aleatorios.
    Devuelve verdadero si se ha podido insertar las medidas y
    falso si no (si la ciudad ya existe). */

    insertaAleatorio(ciudad){
        for(let fila of this._medidas){
            if(fila[0] === ciudad){
                console.log("La ciudad ya existe.");
                return false;
            }

            
        }
       let valores = [];
        for (let i = 0; i < 30; i++) {
        let numAleatorio = Math.floor(Math.random() * 51) - 10; 
        valores.push(numAleatorio);
        }
              
        this._medidas.push([ciudad,valores]);
        console.log("Medidas generadas aleatoriamente para: "+ciudad);
        return true;
        
    }

    /* Devuelve la temperatura media de la ciudad indicada durante el
    mes */

    mediaMedia(ciudad){
      for(let fila of this.medidas){
            if(fila[0] === ciudad){
                let valores = fila[1];
                let suma = 0;

                for(let i = 0; i < valores.length;i++){
                  suma = suma + valores[i];
                }

                let media = suma / valores.length;
                console.log("La temperatura media en: "+ciudad+" es de "+media+" º");
                return media;
            }
        }
        console.log("La ciudad no esta en la tabla");
            return null;
    }

    /* Devuelve la temperatura media de todas las ciudades durante el
    mes */

    mediaMedidasTotal(){
        if(this._medidas.length === 0){
            console.log("No hay medidas en la tabla");
            return null;
        }

        let sumaTotal=0;
        let contador=0;

        for(let fila of this._medidas){
            let valores=fila[1];
            for(let i=0;i<valores.length;i++){
                sumaTotal = sumaTotal+valores[i];
                contador = contador+1;
            }
        }
        let mediaTotal = sumaTotal /contador;
            console.log("la temperatura media total es de : "+mediaTotal)
        return mediaTotal;
    }

    

    /* Elimina las medidas de la ciudad. Devuelve verdadero si se ha podido eliminar la fila y falso si no
    (pues la ciudad no existe). */

    eliminaCiudad(ciudad){
        
        for(let i=0;i<this._medidas.length;i++){
            if(this._medidas[i][0] === ciudad){
                this._medidas.splice(i,1);
                console.log("Ciudad: "+ciudad+" Eliminada");
                return true;
            }
            
        }

        console.log("Ciudad: "+ciudad+" no encontrada.")
        return false;

        
    }

    /* Se muestran por consola las medidas correspondientes a cada
    ciudad. */

    toConsole() {
        if (this._medidas.length === 0) {
      console.log("No hay datos para mostrar.");
      return;
    }

    for (let fila of this._medidas) {
      let ciudad = fila[0];
      let valores = fila[1];
      console.log("Ciudad: " + ciudad);
      console.log("Medidas: " + valores.join(", "));
      console.log("\n");
      
    }
  }
    
    
    
}

