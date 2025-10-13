
 class Persona {

    constructor(nombre= " ",apellidos= " "){
        this.nombre = nombre;
        this.apellidos=apellidos;
    }
         
      get nombre() {
        return this._nombre;
    }

    get apellidos() {
        return this._apellidos;
    }

    
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    set apellidos(nuevosApellidos) {
        this._apellidos = nuevosApellidos;
    }
    comer(platos = []){
    if (platos.length === 0){

        console.log(`${this.nombre} ${this.apellidos}esta comiendo un bocata de chorizo`);
    }else{  
        const listaPlatos = platos.join(", ");
        console.log(`${this.nombre} ${this.apellidos} esta comiendo : ${listaPlatos}`);
    }
} 
}

const persona1 = new Persona();
persona1.comer();

const persona2 = new Persona("Sofia", "Gonzalez");
persona2.comer(["paella", "ensalada", "flan"]);

const persona3 = new Persona("Julian", "Dominguez");
persona3.comer(["pizza"]);

