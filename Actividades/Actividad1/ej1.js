var num=prompt("Introduce un número: ");

function tablaMultiplicar(num){

let resultado ="\n";
for(let i=1; i<=10; i++){
resultado = num + " * " + i + "=" +num* i + "\n";
}

return resultado;
}
console.log(tablaMultiplicar(num));