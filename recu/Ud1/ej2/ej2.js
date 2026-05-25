dia = prompt("Introduce el dia de tu cumpleaños (númerico)");
mes = prompt("Introduce el mes (númerico)");

const infoCumple = (dia,mes) => {

    let hoy = new Date();
    let miFecha = new Date(2026,mes-1,dia);

    let difMs = miFecha-hoy;

    let dias = Math.ceil(difMs / (1000*60*60*24));
    let diaSemana = miFecha.toLocaleDateString("es-ES", { weekday: "long" });
    return {
        dias : dias,
        diaSemana : diaSemana
    }

}

let resultado = infoCumple(dia, mes);
console.log("Días que faltan: " + resultado.dias);
console.log("Día de la semana: " + resultado.diaSemana);