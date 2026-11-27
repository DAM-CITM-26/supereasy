import EtiquetaSuper from './EtiquetaSuper.jsx'
import { euros, precioMinimo, precioPorUnidad, superMasBarato } from '../utils/logica.js'
import { Link } from 'react-router-dom'

export default function TarjetaProducto({ producto }) {
  return (
    <Link to={`/producto/${producto.id}`} className="card">
      <div className="card-cuerpo">
        <p className="card-meta">{/*producto.categoria*/}</p>
        <h3>{producto.nombre}</h3>
        <p>
          <b style={{ fontSize: '1.2rem' }}>{euros(precioMinimo(producto))}</b>{' '}
          <span className="card-meta">
            · {euros(precioPorUnidad(producto))}/{producto.unidad}
          </span>
        </p>
        <EtiquetaSuper nombre={superMasBarato(producto)} />
      </div>
    </Link>
  )
}
