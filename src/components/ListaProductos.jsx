function ListaProductos({ productos, vacio }) {
    if (productos.length === 0) return Vacio({ icono: '🛒', texto: vacio })
    return (<div class="grid">{productos.map((producto) => TarjetaProducto({ producto })).join('')}</div>)
}

export default ListaProductos
