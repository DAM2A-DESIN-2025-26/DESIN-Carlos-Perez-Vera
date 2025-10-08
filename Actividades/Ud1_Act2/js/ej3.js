var cadena1 = [1,2,3,4,5,8,9];
var cadena2 = [1,2,3,4,5,6];
var cadena3 = [1,2,5,6,7,8];


    function numerosCorrectos(array) {
  for (var i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return i; 
      
  }
  
}

    return -1; 
}

console.log(numerosCorrectos(cadena1));
console.log(numerosCorrectos(cadena2));
console.log(numerosCorrectos(cadena3));