// LÓGICA · funciones puras: reciben datos y devuelven datos (de js/logica.js de la referencia).
// No tocan el estado ni la pantalla, y nunca modifican lo que reciben.
// Solo las que usa la pantalla del Sprint 1. buscarProductos (Sprint 2),
// cambiarCantidad y totalesPorSuper (Sprint 3) se añaden en su sprint.

// El precio más bajo entre todos los supermercados que lo tienen
export function precioMinimo(producto) {
  return Math.min(...Object.values(producto.precios))
}

// El nombre del supermercado más barato para ese producto
export function superMasBarato(producto) {
  const minimo = precioMinimo(producto)
  return Object.keys(producto.precios).find((nombre) => producto.precios[nombre] === minimo)
}

// Precio por kg, por l o por unidad, con dos decimales
export function precioPorUnidad(producto) {
  return Math.round((precioMinimo(producto) / producto.cantidad) * 100) / 100
}

// 'Todos' y 'Cualquiera' no filtran. maximo es un número de euros o 'Cualquiera'.
export function filtrarProductos(productos, { supermercado, maximo }) {
  return productos.filter(
    (producto) =>
      (supermercado === 'Todos' || producto.precios[supermercado] !== undefined) &&
      (maximo === 'Cualquiera' || precioMinimo(producto) <= maximo),
  )
}

// Devuelve una copia ordenada: 'barato', 'caro' o 'nombre'
export function ordenarProductos(productos, criterio) {
  const copia = [...productos]
  if (criterio === 'nombre') return copia.sort((a, b) => a.nombre.localeCompare(b.nombre))
  if (criterio === 'caro') return copia.sort((a, b) => precioMinimo(b) - precioMinimo(a))
  return copia.sort((a, b) => precioMinimo(a) - precioMinimo(b))
}

// 1.5 → '1,50 €'
export function euros(numero) {
  return numero.toFixed(2).replace('.', ',') + ' €'
}
