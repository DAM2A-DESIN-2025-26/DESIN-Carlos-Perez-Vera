 let nombre = "Carlos";
let edad = 21;
let ciudad = "Oviedo";
let altura = 1.90;

console.log("Nombre: ",typeof nombre);
console.log("Edad: ",typeof edad);
console.log("Ciudad: ",typeof ciudad);
console.log("Altura: ",typeof altura);

console.log(`Hola, me llamo ${nombre}, tengo ${edad} años, vivo en ${ciudad} y mido ${altura} metros.`); 

nombre = prompt("Introduce tu nombre.");
ciudad = prompt("Introduce tu ciudad.");

edad = Number(prompt("Introduzca su edad."));
altura = Number(prompt("Introduzca tu altura."));

console.log("Nuevo Nombre: ",typeof nombre2);
console.log("Nuevo Edad: ",typeof edad2);
console.log("Nuevo Ciudad: ",typeof ciudad2);
console.log("Nuevo Altura: ",typeof altura2);

console.log(`Hola, me llamo ${nombre}, tengo ${edad} años, vivo en ${ciudad} y mido ${altura} metros.`); 