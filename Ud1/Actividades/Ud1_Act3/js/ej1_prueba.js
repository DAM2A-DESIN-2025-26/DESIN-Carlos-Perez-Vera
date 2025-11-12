// Crear objeto principal
 tabla = new CentralMedidas();

// Insertar valores manuales
tabla.insertarMedidas("MADRID", [10,12,15,20,22,18,17,19,21,20,18,17,15,14,13,12,11,10,9,8,7,6,5,10,12,14,16,18,20,22]);

// Insertar valores aleatorios
tabla.insertaAleatorio("SEVILLA");
tabla.insertaAleatorio("VALENCIA");

// Mostrar todo
tabla.toConsole();

// Medias
tabla.mediaMedia("MADRID");
tabla.mediaMedidasTotal();

// Eliminar una ciudad
tabla.eliminaCiudad("VALENCIA");

// Mostrar después de borrar
tabla.toConsole();
