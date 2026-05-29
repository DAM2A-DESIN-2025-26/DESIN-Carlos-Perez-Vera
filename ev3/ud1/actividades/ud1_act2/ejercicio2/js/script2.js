function revisarSuministros(cantidades){

    //Con esto se calcula la diferencia princiapl.
    let saltoInicial = cantidades[1]-cantidades[0];

    for(let i = 0; i<cantidades.length-1;i++){
        let salto=cantidades[i + 1] - cantidades[i];
        if(salto != saltoInicial){
            return {
                correcto: false,
                salto: saltoInicial,
                posError: i + 1 // La posición donde se detecta el fallo
            };
        }
        // 3. Si el bucle termina sin fallos, devuelve el objeto de éxito
    
    }
    return {
        correcto: true,
        salto: saltoInicial,
        posError: -1
    };
}

// CASO 1: Progresión perfecta (Salto de 3)
console.log("Prueba 1:", revisarSuministros([12, 15, 18, 21, 24])); 


// CASO 2: Error en la mitad (El 20 rompe el salto de 5)
console.log("Prueba 2:", revisarSuministros([10, 15, 20, 26, 31])); 


// CASO 3: Solo dos elementos (El mínimo para tener un salto)
console.log("Prueba 3:", revisarSuministros([5, 10])); 
