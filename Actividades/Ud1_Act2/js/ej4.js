function tiposEnArray(arr){
    return arr.map(item => typeof item);
}
console.log(tiposEnArray([1, 'hola', true, null, undefined, {a:1}, [1,2]]));

console.log(tiposEnArray(['texto', 42, false, {nombre: 'Juan'}, [3,4,5], null]));

console.log(tiposEnArray([true, 100, 'cadena', undefined, [10, 20]]));

console.log(tiposEnArray([]));