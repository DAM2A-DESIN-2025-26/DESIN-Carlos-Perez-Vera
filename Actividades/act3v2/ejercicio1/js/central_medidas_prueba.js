import {Medidas} from "./centralMedidas.js";

const medidas = new Medidas();

medidas.insertaAleatorio("Madrid");
medidas.insertaAleatorio("Oviedo");
medidas.insertaAleatorio("Sevilla");
medidas.insertaAleatorio("Valencia");
medidas.insertaAleatorio("Santiago");

console.table(medidas.getTabla());

console.log(medidas.eliminaCiudad("Valencia"));

medidas.toConsole();

console.log(`La media total de todas las ciudades: ${medidas.mediaMedidasTotal()}`);