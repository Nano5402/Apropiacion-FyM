import {
  saludoPersonalizado,
  calcularPromedio,
 } from "./modulos/index.js";

let user = prompt("Ingrese su nombre:")
console.log(saludoPersonalizado(user));
alert(saludoPersonalizado(user))

// Llamamos la función que pedirá las notas al usuario
console.log(calcularPromedio());
// Aqui nos daría un valor diferente al anterior
alert(calcularPromedio());
