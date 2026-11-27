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
  
  const registros = [...datos.items]
  for (let pagina = 2; pagina <= datos.pages; pagina++) {
    const respuestaPagina = await fetch(`${DIRECCION}&page=${pagina}`)

    if (!respuestaPagina.ok) {
      throw new Error(`Error al consultar la página ${pagina}`)
    }

    const datosPagina = await respuestaPagina.json()

    registros.push(...datosPagina.items)
  }
  /*
  console.log('Páginas consultadas:', datos.pages)
  console.log('Total de registros recibidos:', registros.length)*/

  const productos = adaptarPrecios(registros)
  /*console.log('Productos agrupados:', productos.length)*/
  
  // return: la promesa de pedirLista se cumple con el array de juegos
  return productos
}