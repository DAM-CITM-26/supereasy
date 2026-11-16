import TarjetaProducto from "./TarjetaProducto"
import Vacio from "./Vacio"


function ListaProductos({ productos, vacio }) {
    if (productos.length === 0) return (<Vacio icono={'🛒'} texto={'No hay productos disponibles'}></Vacio>)
    return (<div className="grid">{productos.map((producto) => (<TarjetaProducto key={producto.id} producto={producto} />))}</div>)
}

export default ListaProductos
