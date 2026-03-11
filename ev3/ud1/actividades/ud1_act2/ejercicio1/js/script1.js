function generarCodigoMision(nombreMision,planetaDestino,año){

    let cadena;

    cadena=(nombreMision.slice(0,3)+planetaDestino.slice(planetaDestino.length - 2,planetaDestino.length)+año).toUpperCase();
    console.log(cadena);
    return cadena;

}
let nombre = prompt("Introduce el nombre de la mision");
let planeta = prompt("Introduce el nombre del planeta");
let año = Number(prompt("Introduce el año del viaje"));

let codigo = generarCodigoMision(nombre,planeta,año);

// Función anónima
let parImpar = function(codigo){
    if(codigo.length % 2 == 0){
        console.log("Es par");
    } else {
        console.log("Es impar");
    }
};

parImpar(codigo);

// Función flecha
const contarDigitos = (codigo) => {
    let contador = 0;
    for(let i = 0; i < codigo.length; i++){
        let c = codigo[i];
        if (c >= '0' && c <= '9') {
            contador++;
        }
    }
    return contador;
};

console.log(contarDigitos(codigo));
