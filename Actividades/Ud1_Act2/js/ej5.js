var paises = ["España", "Francia", "Portugal", "Italia", "Alemania"];

//Mostrar todos los elementos del array separados por un salto de línea usando for..of

for(var pais of paises){
    console.log(pais);
}

//Mostrar los elementos del array en sentido inverso separados por un salto de línea usando foreach

paises.slice().reverse().forEach(function(pais){
    console.log(pais);
});

//Mostrar los elementos del array alfabéticamente separados por un salto de
//línea usando una sola sentencia

paises.sort().forEach(pais => console.log(pais));
    
//Añadir un elemento al comienzo del array

paises.unshift("Reino Unido");
console.log(paises);

//Añadir un elemento al final del array

paises.push("Bélgica");
console.log(paises);

//Borrar un elemento al comienzo del array (indicar cuál es)

paises.shift("Reino Unido");
console.log(paises);

//Borrar un elemento al final del array (indicar cuál es)

paises.pop("Bélgica");
console.log(paises);

