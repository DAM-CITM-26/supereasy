import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { pedirProductos } from "../data/api.js"
import { euros } from "../utils/logica.js"

export default function PantallaProducto() {
    const {id} = useParams()
    const [producto, setProducto]=useState(null)
    const [cargando, setCargando]=useState(true)
    const [error, setError]=useState(null)
    useEffect(() => {
        let cancelada = false
        async function cargarProducto(){
            try{
                const productos = await pedirProductos()
                const encontrado = productos.find((p)=>String(p.id)===id)
                if(!cancelada){
                    setProducto(encontrado||null)
                }
            }
            catch(error){
                if(!cancelada){
                    setError(error.message)
                }
            }
            finally{
                if(!cancelada){
                    setCargando(false)
                }
            }
        }cargarProducto()

        return () => {
          cancelada = true
        }
      }, [id]
    )

    if(cargando){
        return <p>Cargando...</p>
    }
    if (error){
        return <p>Error: {error}</p>
    }
    if(!producto){
        return <p>No se ha encontrado el producto</p>
    }

    const supermercadosOrdenados = Object.keys(producto.precios).sort((a,b)=>producto.precios[a]-producto.precios[b])

    return (
        <section className="seccion stack">
            <article className="stack">
                <h2>{producto.nombre}</h2>
                <p className="card-meta">{/*producto.categoria*/}</p>
                <table className="tabla"><thead><tr><th>Supermercado</th><th>Precio</th></tr></thead><tbody>{supermercadosOrdenados.map((nombre, i)=>(<tr key={nombre}><td>{i===0?'🏆':''}{nombre}</td><td>{euros(producto.precios[nombre])}</td></tr>))}</tbody></table>

                {/*<div class="row">
                ${SelectorCantidad({ nombre: 'cesta-' + producto.id, etiqueta: 'En la cesta', valor: linea ? linea.cantidad : 0, min: 0, max: 20 })}
                ${MarcaSprint({ sprint: 3 })}
                </div>*/}
            </article>
        </section>
        )
      
}