let num1 = Number(prompt("Introdcuce el primer numero."));
let num2 = Number(prompt("Introdcuce el segundo numero."));
let num3 = Number(prompt("Introdcuce el tercer numero."));

let mayor;
let menor;
if(num1 === num2 && num1 === num3){
    console.log("Los tres numeros son iguales.")
}else {
    mayor = Math.max(num1,num2,num3);
    menor = Math.min(num1,num2,num3); 
}
 console.log(`El mayor es: ${mayor}`);
    console.log(`El menor es: ${menor}`);
