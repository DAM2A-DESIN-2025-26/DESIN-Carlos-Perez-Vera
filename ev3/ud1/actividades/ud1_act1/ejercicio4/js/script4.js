function invertirNumero(numero){
    let invertido=0;

    while(numero > 0){
        let digito = numero % 10;
        invertido = invertido * 10 + digito;
        numero = Math.floor(numero/10);
    }
    return invertido;
}

let numero = Number(prompt("Introduce el numero que quieres invertir"));

console.log(invertirNumero(numero));