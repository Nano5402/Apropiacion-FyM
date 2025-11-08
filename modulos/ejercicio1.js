// Definimos una función llamada saludoPersonalizado que recibe un parámetro "nombre"
function saludoPersonalizado(nombre) {
  // Usamos una plantilla de texto (backticks ``) para construir el mensaje
  // Con ${nombre} insertamos directamente el valor dentro del string
  return `Bienvenido, ${nombre}!`;
}

// let mensaje = saludoPersonalizado("Andres");
// console.log(mensaje); // Muestra "Bienvenido, Andres!"

// Exportamos la función para poder utilizarla en otros archivos del proyecto
export { saludoPersonalizado }