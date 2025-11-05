import {CentralMedidas} from "./centralMedidas.js";

/* Mostrar error en la capa */
function mostrarError(mensaje) {
  const capaErrores = document.getElementById('errores');
  if (!capaErrores) return;

  // Crear un nuevo div para el error
  const errorDiv = document.createElement('div');
  errorDiv.classList.add('error');
  errorDiv.textContent = mensaje;
  capaErrores.appendChild(errorDiv);
}

function limpiarErrores() {
  const capaErrores = document.getElementById('errores');
  if (capaErrores) capaErrores.innerHTML = '';
}

/* Mostrar temperaturas media */
function mostrarTemperatura() {
  const capaTemperaturas = document.getElementById('temperatura-media');
  if (!capaTemperaturas) return;
  
  capaTemperaturas.textContent = `Temperatura media: ${centralMedidas.mediaMedidasTotal()}`;
  capaTemperaturas.style.display = "block";
}

/* Formulario */
const centralMedidas = new CentralMedidas();

/* Cargar medidas al iniciar */
const guardadas = localStorage.getItem("medidas");
if (guardadas) {
  centralMedidas.fromJSON(guardadas);
  centralMedidas.mostrarTabla();
  mostrarTemperatura();
}

/* Añadir ciudad */
const form = document.getElementById('miFormulario'); // devuelve el elemento con id
const ciudad = form.querySelector('input[name="ciudad"]'); // Devuelve el primer elemento
// que concuerda con el css especificado entre parentesis
var medidas = form.querySelector('textarea[name="medidas"]');
const radios = form.querySelectorAll('input[name="modo"]'); // Devuelve un array de elementos
// que concuerdan con el css especificado entre parentesis
const botonGuardar = form.querySelector('#guardar');
const botonBorrar = form.querySelector('#borrar');

/* Ciudad a mayusculas */
ciudad.addEventListener('input', () => {
  ciudad.value = ciudad.value.toUpperCase();
});


/* Radios */
radios.forEach(radio => { // Para que cada vez que cambies el modo "reinicie" el bucle
  radio.addEventListener('change', () => { // Deseleccionar un elemento que se ha modificado

    medidas.value = ''; // Borrar el valor de medidas
    
    if (radio.value === 'manual') {
      medidas.readOnly = false;
    } else if (radio.value === 'aleatorio') {
      medidas.readOnly = true; // solo lectura
    }
  });
});


/* Guardar medidas */
botonGuardar.addEventListener('click', (event) => {
  limpiarErrores();
  // trim() vale para eliminar espacios en blanco antes y despues del texto
  const valorCiudad = ciudad.value.trim();
  const modo = form.querySelector('input[name="modo"]:checked');
  const valorMedidas = medidas.value.trim();

  if (!valorCiudad) {
    mostrarError("Debes introducir un nombre de ciudad.");
    return;
  }

  if (!modo) {
    mostrarError("Selecciona un modo (manual o aleatorio).");
    return;
  }
  
  let insertado = false;

  if (modo.value === 'manual') {
    const valores = valorMedidas.split(',').map(v => parseInt(v.trim(), 10));
    if (valores.length !== 30 || valores.some(isNaN)) {
      mostrarError("No son o 30 valores o no estan separados por comas");
      return;
    }

    insertado = centralMedidas.insertaMedidas(valorCiudad, valores);
  } else {
    insertado = centralMedidas.insertaAleatorio(valorCiudad);
  }

  if (!insertado) {
    mostrarError("La ciudad ya existe");
  } else {
    centralMedidas.mostrarTabla();
    mostrarTemperatura();
  }

  ciudad.value = '';
  medidas.value = '';
  medidas.readOnly = false;
})

/* Borrar ciudad */
botonBorrar.addEventListener('click', (event) => {
  limpiarErrores();
  const valorCiudad = ciudad.value.trim();

  if (!valorCiudad) {
    mostrarError("Debes introducir el nombre de una ciudad");
    return;
  }

  const existe = centralMedidas.getTabla().some(f => f[0] === valorCiudad);

  if (!existe) {
    mostrarError("La ciudad que quieres borrar no existe");
    return;
  }

  centralMedidas.eliminaCiudad(valorCiudad);
  centralMedidas.mostrarTabla();
  mostrarTemperatura();


  ciudad.value = '';
  medidas.value = '';
  medidas.readOnly = false;
  radios.forEach(r => r.checked = false);
});

/* Guardar automaticamente al salir */
window.addEventListener("beforeunload", () => {
  const datos = centralMedidas.toJSON();
  localStorage.setItem("medidas", datos);
});

