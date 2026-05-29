function calcularNivel(puntos) {
    if (puntos < 100) {
        return "Principiante";
    } else if (puntos < 500) { 
        return "Intermedio";
    } else if (puntos < 1000) { 
        return "Avanzado";
    } else { 
        return "Experto";
    }
}

let puntos = Number(prompt("Introduce tus puntos"));
console.log(calcularNivel(puntos));