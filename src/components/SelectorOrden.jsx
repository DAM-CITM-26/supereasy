function SelectorOrden({ valor }) {
    return (
      <label className="field">
        Ordenar por
        <select data-campo="orden" value={valor}>
          <option value="barato">Precio: de menos a más</option>
          <option value="caro">Precio: de más a menos</option>
          <option value="nombre">Nombre</option>
        </select>
      </label>
    )
  }

  export default SelectorOrden
  