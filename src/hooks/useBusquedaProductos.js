
import { useState, useEffect } from 'react'
import { pedirProductos } from '../data/api.js'
import { buscarProductos } from '../utils/logica.js'

export default function useBusquedaProductos() {
  const [productos, setProductos] = useState([])
  const [texto, setTexto] = useState('')
  const [resultados, setResultados] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const [busquedaRealizada, setBusquedaRealizada] = useState(false)
  const [intento, setIntento] = useState(0)

  // Cargar los productos de la API
  useEffect(() => {
    let cancelada = false

    async function cargarProductos() {
      setCargando(true)
      setError(null)

      try {
        const datos = await pedirProductos()

        if (!cancelada) {
          setProductos(datos)
        }
      } catch (error) {
        if (!cancelada) {
          setError(error.message)
        }
      } finally {
        if (!cancelada) {
          setCargando(false)
        }
      }
    }

    cargarProductos()

    return () => {
      cancelada = true
    }
  }, [intento])

  // Buscar productos con debounce
  useEffect(() => {
    if (texto.trim() === '') {
      setResultados([])
      setBusquedaRealizada(false)
      return
    }

    setBusquedaRealizada(false)

    const temporizador = setTimeout(() => {
      const encontrados = buscarProductos(productos, texto)
      setResultados(encontrados)
      setBusquedaRealizada(true)
    }, 300)

    return () => {
      clearTimeout(temporizador)
    }
  }, [texto, productos])

  // Volver a solicitar los productos si hay un error
  function reintentar() {
    setIntento((prev) => prev + 1)
  }

  return {
    texto,
    setTexto,
    resultados,
    cargando,
    error,
    busquedaRealizada,
    reintentar
  }
}
