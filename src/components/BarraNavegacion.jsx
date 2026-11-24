
import { NavLink } from 'react-router-dom'

export default function BarraNavegacion() {
  return (
    <nav className="pestanas" aria-label="Navegación principal">
      <NavLink
        to="/productos"
        end
        className={({ isActive }) => isActive ? 'activa' : ''}
      >
        Productos
      </NavLink>

      <NavLink
        to="/buscar"
        end
        className={({ isActive }) => isActive ? 'activa' : ''}
      >
        Buscar
      </NavLink>
    </nav>
  )
}
