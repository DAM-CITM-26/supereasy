
import { Routes, Route, Navigate, Link } from 'react-router-dom'

import LayoutPrincipal from './components/LayoutPrincipal.jsx'
import Inicio from './pages/Inicio.jsx'
import Buscar from './pages/Buscar.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<LayoutPrincipal />}>

        {/* Pantalla inicial: redirige a Productos */}
        <Route
          index
          element={<Navigate to="/productos" replace />}
        />

        {/* Sección Productos */}
        <Route
          path="productos"
          element={<Inicio />}
        />

        {/* Sección Buscar */}
        <Route
          path="buscar"
          element={<Buscar />}
        />

        {/* Página no encontrada */}
        <Route
          path="*"
          element={
            <div className="vacio">
              <h2>Página no encontrada</h2>
              <Link to="/productos">Volver a Productos</Link>
            </div>
          }
        />

      </Route>
    </Routes>
  )
}
