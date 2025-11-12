
alert("-- Inicio --")

var caja = document.createElement("div");

//Enlace
var enlace = document.createElement("a");
var parrafo = document.createElement("p");
var texto = document.createTextNode("Soy un enlace")

enlace.setAttribute("href","https://alojaweb.educastur.es/web/iesmontenaranco")
enlace.appendChild(texto);


//Párrafo
var parrafo = document.createElement("p");
var texto = document.createTextNode("Me van a cambiar")
parrafo.appendChild(texto);

caja.appendChild(enlace);
caja.appendChild(parrafo);
//Div
document.body.appendChild(caja);

var fecha = document.createElement("p");
var textoFecha = document.createTextNode(new Date().toLocaleDateString);
fecha.appendChild(textoFecha);
document.body.insertBefore(fecha,caja);



//Párrafo final
var parrafoFinal = document.createElement("p");
var textoFinal = document.createTextNode("Contenido Parrafo");


parrafoFinal.appendChild(textoFinal);

document.body.appendChild(parrafoFinal);

enlace.remove();

parrafo.innerHTML = "Carlos Pérez";


