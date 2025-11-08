import {
  saludoPersonalizado,
 } from "./modulos/index.js";

let user = prompt("Ingrese su nombre:")
console.log(saludoPersonalizado(user));
alert(saludoPersonalizado(user))