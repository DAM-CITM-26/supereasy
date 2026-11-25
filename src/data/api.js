import { adaptarPrecios } from "../utils/adaptarDatos"
const DIRECCION = 'https://prices.openfoodfacts.org/api/v1/prices?currency=EUR&location__osm_address_country_code=ES&size=100'

// async: dentro se puede usar await, y devuelve una promesa
export async function pedirProductos() {
  // 1.er await: fetch devuelve una promesa. await espera a que
  //    llegue la respuesta: el status y las cabeceras
  const respuesta = await fetch(DIRECCION)
  if (!respuesta.ok) {
    // throw: la promesa de pedirLista se rechaza con este error
    throw new Error(`La API respondió ${respuesta.status}`)
  }
  // 2.º await: el cuerpo llega después. json() devuelve otra
  //    promesa: await espera a tenerlo entero, ya como objeto
  const datos = await respuesta.json()
  console.log('Total de registros recibidos:', datos.items.length)
  console.log(
    'Países recibidos:',
    [...new Set(datos.items.map(registro =>
        registro.location?.osm_address_country_code
    ))]
)
console.log('Primer registro:', datos.items[0])
  const registros = datos.items
  const productos = adaptarPrecios(registros)
  console.log(productos)
  
  // return: la promesa de pedirLista se cumple con el array de juegos
  return productos
}