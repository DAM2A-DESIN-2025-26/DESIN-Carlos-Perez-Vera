let numeros = [1,2,3,4,9,7,8];



const numerosCorrectos = (numeros) => {

    let pos = -1;   

    for (let i = 0; i < numeros.length - 1; i++) {
        if (numeros[i] > numeros[i + 1]) {
            pos = i + 1;
            break;
        }
    }

    return pos;  // devuelve -1 si no encontró nada, o el índice si encontró
}

console.log(numerosCorrectos(numeros))
