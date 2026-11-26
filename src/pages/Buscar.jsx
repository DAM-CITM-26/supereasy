
import Vacio from '../components/Vacio.jsx'
import ListaProductos from '../components/ListaProductos.jsx'
import useBusquedaProductos from '../hooks/useBusquedaProductos.js'

export default function Buscar() {
  const {
    texto,
    setTexto,
    resultados,
    cargando,
    error,
    busquedaRealizada,
    reintentar
  } = useBusquedaProductos()

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
        placeholder="Busca un producto"
        value={texto}
        onChange={(evento) => setTexto(evento.target.value)}
      />

      {/* Estado de carga */}
      {cargando && (
        <p role="status">Cargando productos...</p>
      )}

      {/* Estado de error */}
      {!cargando && error && (
        <div className="vacio" role="alert">
          <p>No se han podido cargar los productos.</p>
          <p>{error}</p>
          <button
            className="btn"
            type="button"
            onClick={reintentar}
          >
            Reintentar
          </button>
        </div>
      )}

      {/* Estado inicial */}
      {!cargando && !error && texto.trim() === '' && (
        <Vacio
          icono="🔍"
          texto="Escribe para buscar."
        />
      )}

      {/* Esperando al debounce */}
      {!cargando && !error && texto.trim() !== '' && !busquedaRealizada && (
        <p role="status">Buscando...</p>
      )}

      {/* Mostrar resultados */}
      {!cargando && !error && busquedaRealizada && (
        <ListaProductos
          productos={resultados}
          vacio="No se han encontrado productos."
        />
      )}

    </section>
  )
}
