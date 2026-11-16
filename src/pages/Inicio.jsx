import PantallaProductos from '../components/PantallaProductos.jsx'
import EtiquetaSuper from '../components/EtiquetaSuper.jsx'
import ListaProductos from '../components/ListaProductos.jsx'
import SelectorOrden from '../components/SelectorOrden.jsx'
import TarjetaProducto from '../components/TarjetaProducto.jsx'
import { SUPERMERCADOS } from '../data/supermercados.js'
import Vacio from '../components/Vacio.jsx'
import { PRODUCTOS } from '../data/productos.js'

export default function Inicio() {
  return (
    <main>
      {/*<TarjetaProducto producto={PRODUCTOS[0]}>
        <EtiquetaSuper nombre={SUPERMERCADOS[0]}></EtiquetaSuper>
        <Vacio icono={'🛒'} texto={'No hay productos disponibles'}></Vacio>
      </TarjetaProducto>*/}
      
      <ListaProductos productos={PRODUCTOS} vacio={'No hay productos disponibles'}></ListaProductos>
      
    </main>
  )
}