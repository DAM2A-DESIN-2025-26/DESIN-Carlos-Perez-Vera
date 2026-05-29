function calcularTiempo(distancia,velocidad){
    let tiempo = distancia/velocidad;
    return tiempo;
}

let distancia = Number(prompt("Introduce la distancia a recorrer."));
let velocidad = Number(prompt("Introduce la velocidad a la que vas."));

console.log(calcularTiempo(distancia,velocidad));