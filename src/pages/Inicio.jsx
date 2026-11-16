import PantallaProductos from '../components/PantallaProductos.jsx'
import EtiquetaSuper from '../components/EtiquetaSuper.jsx'
import ListaProductos from '../components/ListaProductos.jsx'
import SelectorOrden from '../components/SelectorOrden.jsx'
import TarjetaProducto from '../components/TarjetaProducto.jsx'
import { SUPERMERCADOS } from '../data/supermercados.js'

export default function Inicio() {
  return (
    <main>
      <EtiquetaSuper nombre={nombre}></EtiquetaSuper>
    </main>
  )
}