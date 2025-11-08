// Ejercicio 2: calcularPromedio con entrada del usuario
function calcularPromedio() {
  // Pedimos las notas al usuario con prompt
  let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
  let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
  let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

  // Calculamos el promedio
  let promedio = (nota1 + nota2 + nota3) / 3;

  // Condicional para verificar si aprobó o reprobó
  if (promedio >= 3.0) {
    return `Promedio: ${promedio.toFixed(1)} - El estudiante acaba de aprobar!`;
  } else {
    return `Promedio: ${promedio.toFixed(1)} - El estudiante reprobó (Que lastima)`;
  }
}

// Exportamos la función
export { calcularPromedio };
