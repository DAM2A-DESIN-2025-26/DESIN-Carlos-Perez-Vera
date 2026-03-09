function tablaDeMultiplicar(numero){
    for(let i=1; i<11;i++){
        let resultado = numero *i;
        console.log(numero + " x " + i + " = " + resultado);
    }
}

let numero = Number(prompt("Introduce un número para ver su tabla de multiplicar:"));

tablaDeMultiplicar(numero);