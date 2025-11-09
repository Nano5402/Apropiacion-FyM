import {
  saludoPersonalizado,
  calcularPromedio,
  contarHasta,
  calcularIVA,
  calcularSubtotal,
  calcularTotal, 
 } from "./modulos/index.js";

 // Ejercicio Nro1
// let user = prompt("Ingrese su nombre:")
// console.log(saludoPersonalizado(user));
// alert(saludoPersonalizado(user))

//Ejercicio Nro2
// // Llamamos la función que pedirá las notas al usuario
// console.log(calcularPromedio());
// // Aqui nos daría un valor diferente al anterior
// alert(calcularPromedio());

// Ejercicio Nro3
// contarHasta()

// Ejercicio Nro4
let cantidad = parseInt(prompt("Ingrese la cantidad de productos:"));
let precio = parseFloat(prompt("Ingrese el precio por producto:"));

let subtotal = calcularSubtotal(cantidad, precio);
let iva = calcularIVA(subtotal);
let total = calcularTotal(cantidad, precio);

console.log(`Subtotal: $${subtotal}`);
console.log(`IVA (19%): $${iva}`);
console.log(`Total a pagar: $${total}`);