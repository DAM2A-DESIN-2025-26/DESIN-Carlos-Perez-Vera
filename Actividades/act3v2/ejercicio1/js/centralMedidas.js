
export class Medidas {
    /*
    Contiene una tabla de enteros correspondientes a las medidas
    tomadas durante un mes en distintas ciudades. La primera
    columna almacenará el nombre de la ciudad.
    Inicialmente el array está vacío
    */
    #medidas = [];

    /**
     * Nueva fila en la tabla correspondiente a los valores
     */
    insertaMedidas(ciudad, valores) {
        // Buscar si la ciudad existe o si valores tiene 30 elementos
        if(this.#medidas.some(fila => fila[0] === ciudad) || valores.length !== 30) {
            return false;
        } else {
            var nuevaFila = [ciudad, ...valores];
            this.#medidas.push(nuevaFila);
            return true;    
        }  
    }

    insertaAleatorio(ciudad) {
        if(this.#medidas.some(fila => fila[0] === ciudad)) {
            return false;
        } else {
            var nuevaFila = [];
            nuevaFila[0] = ciudad;
            for (let i = 1; i <= 30; i++){
                nuevaFila[i] = Math.floor(Math.random() * (30 - (-5) + 1) + (-5));
            }
            this.#medidas.push(nuevaFila);
            return true;    
        }
    }

    mediaMedidas(ciudad) {
        const fila = this.#medidas.find(f => f[0] === ciudad);
        fila.shift(); // Elimino el primer valor
        var suma = 0;
        fila.forEach(valor => {
            suma += valor;
        });
        const media = suma / fila.length;
        fila.unshift(ciudad); // Devuelvo el primer valor
        return media;
    }

    mediaMedidasTotal() {
        var suma = 0;
        for (let fila of this.#medidas) {
            let ciudad = fila[0];
            suma += this.mediaMedidas(ciudad);
        }
        return suma / this.#medidas.length;
    }

    eliminaCiudad(ciudad) {
        if(!this.#medidas.some(fila => fila[0] === ciudad)){
            return false;
        } else {
            for (let i = 0; i < this.#medidas.length; i++) {
                if (this.#medidas[i][0] === ciudad) {
                    this.#medidas.splice(i, 1);
                    return true;
                }
            }
        }

    }

    getTabla() {
        return this.#medidas;
    }

    toConsole() {
        for (const fila of this.#medidas) {
            const ciudad = fila[0];
            const media = this.mediaMedidas(ciudad);
            console.log(`${ciudad}: ${media} ºC `);
        }
    }
}