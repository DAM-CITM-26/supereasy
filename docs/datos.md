# Modelo de datos

## Producto
| Campo     | Tipo   | Ejemplo |
|-----------|--------|---------|
| id        | número | 1 |
| nombre    | texto  | "Leche entera" |
| categoria | texto  | "Lácteos" |
| cantidad  | número | 1 |
| unidad    | texto ("l", "kg", "ud") | "l" |
| precios   | objeto { supermercado: precio en € } | { "Mercadona": 0.95, "Lidl": 0.89 } |

No todos los productos tienen precio en todos los supermercados: si falta uno, ese supermercado no lo vende.

## Supermercado
Texto con el nombre: "Mercadona", "Lidl", "Carrefour", "Dia".

## Ejemplo en JSON
{ "id": 1, "nombre": "Leche entera", "categoria": "Lácteos", "cantidad": 1, "unidad": "l",
  "precios": { "Mercadona": 0.95, "Lidl": 0.89, "Carrefour": 0.99, "Dia": 0.92 } }