import { useState, useEffect } from 'react'
import Chips from '../components/Chips.jsx'
import ListaProductos from '../components/ListaProductos.jsx'
import SelectorOrden from '../components/SelectorOrden.jsx'
import { PRODUCTOS } from '../data/productos.js'
import { SUPERMERCADOS } from '../data/supermercados.js'
import { filtrarProductos, ordenarProductos } from '../utils/logica.js'
import { pedirProductos } from '../data/api.js'
import bannerInicio from '../assets/img.svg';

const PRECIOS_MAXIMOS = ['Cualquiera', '1 €','2 €', '5 €']

// Pantalla P1 · Productos (Sprint 1).
// El estado vive aquí, en el padre común: los controles lo cambian y la lista lo lee.
export default function Inicio() {
  const [orden, setOrden] = useState('barato')
  const [supermercado, setSupermercado] = useState('Todos')
  const [maximo, setMaximo] = useState('Cualquiera') // 'Cualquiera' o un número de euros

  const [productosAPI, setProductosAPI]=useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(()=>{
    async function cargarProductos() {
      try {
        const datos = await pedirProductos()
        setProductosAPI(datos)
      }
      catch (error){
        setError(error.message)
      }
      finally{
        setCargando(false)
      }
    }
    cargarProductos()
  },[])

  const supermercadosAPI = [...new Set(productosAPI.flatMap(producto=>Object.keys(producto.precios)))]
  const filtrados = filtrarProductos(productosAPI, { supermercado, maximo })
  const productos = ordenarProductos(filtrados, orden)

  // Los chips muestran '1 €', pero el estado guarda el número 1
  function cambiarMaximo(opcion) {
    setMaximo(opcion === 'Cualquiera' ? 'Cualquiera' : parseFloat(opcion))
  }
  if(cargando){
    return <p>Cargando...</p>
  }
  if(error){
    return <p>Error: {error}</p>
  }

  return (
    <section className="seccion stack">
      <img
        className="banner"
        src={bannerInicio}
        alt="Banner de inicio"
      />
      <SelectorOrden valor={orden} onCambio={setOrden} />

      <div className="field">
        Supermercado
        <Chips opciones={['Todos', ...supermercadosAPI]} valor={supermercado} onCambio={setSupermercado} />
      </div>

      <div className="field">
        Precio máximo
        <Chips
          opciones={PRECIOS_MAXIMOS}
          valor={maximo === 'Cualquiera' ? 'Cualquiera' : maximo + ' €'}
          onCambio={cambiarMaximo}
        />
      </div>

      <p className="card-meta">{productos.length} productos</p>
      <ListaProductos productos={productos} vacio="No hay productos con estos filtros." />
    </section>
  )
}
