function TarjetaProducto({ producto }) {
    return (
      <a class="card" href={"#/producto/${producto.id}"}>
        <div class="card-cuerpo">
          <p class="card-meta">{producto.categoria}</p>
          <h3>{producto.nombre}</h3>
          <p><b style={{fontSize:'1.2rem'}}>{euros(precioMinimo(producto))}</b>
             <span class="card-meta">· {euros(precioPorUnidad(producto))}/{producto.unidad}</span></p>
          {EtiquetaSuper({ nombre: superMasBarato(producto) })}
        </div>
    </a>)
}
export default TarjetaProducto