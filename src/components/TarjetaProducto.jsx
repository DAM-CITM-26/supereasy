import EtiquetaSuper from './EtiquetaSuper.jsx'
import { euros, precioMinimo, precioPorUnidad, superMasBarato } from '../utils/productos.js'

export default function TarjetaProducto({ producto }) {
  return (
    <article className="card">
      <div className="card-cuerpo">
        <p className="card-meta">{producto.categoria}</p>
        <h3>{producto.nombre}</h3>
        <p>
          <b style={{ fontSize: '1.2rem' }}>{euros(precioMinimo(producto))}</b>{' '}
          <span className="card-meta">
            · {euros(precioPorUnidad(producto))}/{producto.unidad}
          </span>
        </p>
        <EtiquetaSuper nombre={superMasBarato(producto)} />
      </div>
    </article>
  )
}
