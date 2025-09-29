/* 3. Realiza una función sumaDigitos que reciba un número (entero) y devuelva la suma de
todos sus dígitos sin usar cadenas. La función debería devolver la suma de los dígitos del
número. Por ejemplo:
• sumaDigitos(318) => 12
• sumaDigitos (-314569) => 28
 */
var digito=0;
var numero = parseInt(prompt("Introduce un numero: "));
var suma=0;
function sumaDigitos(numero){   
    numero = Math.abs(numero);
    while(numero>0){
        digito = numero % 10;
        suma = suma + digito;
        numero = Math.floor(numero / 10);
    }
    return suma;
}