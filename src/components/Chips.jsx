// Chips de una sola opción. Controlado: recibe valor y avisa con onCambio
export default function Chips({ opciones, valor, onCambio }) {
  return (
    <div className="chips">
      {opciones.map((opcion) => (
        <button
          key={opcion}
          type="button"
          className={opcion === valor ? 'chip activo' : 'chip'}
          aria-pressed={opcion === valor}
          onClick={() => onCambio(opcion)}
        >
          {opcion}
        </button>
      ))}
    </div>
  )
}
