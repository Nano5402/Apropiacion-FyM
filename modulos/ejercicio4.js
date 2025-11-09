// Ejercicio 4: Calcular el valor total de una compra

// Función para calcular el subtotal (cantidad × precio)
function calcularSubtotal(cantidad, precio) {
  return cantidad * precio;
}

// Función para calcular el IVA (19% del subtotal)
function calcularIVA(subtotal) {
  return subtotal * 0.19;
}

// Función para calcular el total a pagar (subtotal + IVA)
function calcularTotal(cantidad, precio) {
  const subtotal = calcularSubtotal(cantidad, precio);
  const iva = calcularIVA(subtotal);
  return subtotal + iva;
}

// Exportamos las funciones
export { calcularSubtotal, calcularIVA, calcularTotal };
