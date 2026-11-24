import Chips from "./Chips.jsx"
import ListaProductos from "./ListaProductos.jsx"
import SelectorOrden from "./SelectorOrden.jsx"
import { filtrarProductos, ordenarProductos } from '../utils/logica.js'
import { PRODUCTOS } from "../data/productos.js"
import { SUPERMERCADOS } from "../data/supermercados.js"

function PantallaProductos({ estado }) {
    const filtrados = filtrarProductos(PRODUCTOS, estado)
    return (
      <section class="seccion stack">
        {SelectorOrden({ valor: estado.orden })}
        <div class="field">Supermercado
          {Chips({ nombre: 'supermercado', opciones: ['Todos', ...SUPERMERCADOS], valor: estado.supermercado })}
        </div>
        <div class="field">Precio máximo
          {Chips({ nombre: 'maximo', opciones: ['Cualquiera', '1 €', '2 €', '5 €'], valor: estado.maximo === 'Cualquiera' ? 'Cualquiera' : estado.maximo + ' €' })}
        </div>
        <p class="card-meta">{filtrados.length} productos</p>
        ${ListaProductos({ productos: ordenarProductos(filtrados, estado.orden), vacio: 'No hay productos con estos filtros.' })}
      </section>)
}
export default PantallaProductos