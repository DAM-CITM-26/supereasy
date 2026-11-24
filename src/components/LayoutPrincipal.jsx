import { Outlet } from 'react-router-dom'
import BarraNavegacion from './BarraNavegacion.jsx'

export default function LayoutPrincipal() {
  return (
    <>
      <header className="cabecera">
        <h1>SuperEasy</h1>
      </header>

      <main>
        <Outlet />
      </main>

      <BarraNavegacion />
    </>
  )
}