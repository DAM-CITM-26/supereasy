// Controlado: recibe valor y avisa con onCambio
export default function SelectorOrden({ valor, onCambio }) {
  return (
    <label className="field">
      Ordenar por
      <select value={valor} onChange={(evento) => onCambio(evento.target.value)}>
        <option value="barato">Precio: de menos a más</option>
        <option value="caro">Precio: de más a menos</option>
        <option value="nombre">Nombre</option>
      </select>
    </label>
  )
}
