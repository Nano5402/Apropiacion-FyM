// Ejercicio 3: contarHasta con entrada del usuario
function contarHasta() {
  // Pedimos al usuario un número
  let numero = parseInt(prompt("Ingrese un número:"));

  // Ciclo que imprime desde 1 hasta el número ingresado
  for (let i = 1;
    i <= numero;
    i++) {
    console.log(i);
  }
}

// Exportamos la función para usarla en otros archivos
export { contarHasta };
