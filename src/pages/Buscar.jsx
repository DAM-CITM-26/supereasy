import Vacio from '../components/Vacio.jsx'

export default function Buscar() {
  return (
    <section className="seccion stack">

      <label
        className="oculto"
        htmlFor="busqueda-productos"
      >
        Busca un producto
      </label>

      <input
        id="busqueda-productos"
        className="buscador"
        type="search"
        placeholder="🔍 Busca un producto"
      />

      <Vacio
        icono="🔍"
        texto="Escribe para buscar."
      />

    </section>
  )
}