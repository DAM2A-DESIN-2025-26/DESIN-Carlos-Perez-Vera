function celsiusAFahrenheit(celsius){

    let farenheit = celsius*(9/5)+32;
    return farenheit;

}

let tempCelsius = Number(prompt("Introduce la temperatura en celsius."));

console.log(celsiusAFahrenheit(tempCelsius));
