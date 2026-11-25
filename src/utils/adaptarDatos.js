export function adaptarPrecios(registros){
    const productosAgrupados = {}
    registros.forEach((registro)=>{
        if (registro.location.osm_address_country_code !== 'ES') {
            return
        }
        if (registro.currency !== 'EUR') {
            return
        }
        
        const idProducto = registro.product_id
        const nombreProducto = registro.product.product_name || `Producto ${registro.product.code}`
        const supermercado =registro.location.osm_brand || registro.location.osm_name
        const precio = Number(registro.price)

        if (!Number.isFinite(precio) || precio <= 0) {
            return
        }

        if (!productosAgrupados[idProducto]) {
            productosAgrupados[idProducto]={
                id: idProducto,
                nombre: nombreProducto,
                categoria: 'Sin categoría',
                cantidad: 1,
                unidad: 'unidad',
                precios: {[supermercado]: precio}
                
            }
            
        }
        else{
            const precioGuardado = productosAgrupados[idProducto].precios[supermercado]

            if (precioGuardado === undefined || precio < precioGuardado) {
                productosAgrupados[idProducto].precios[supermercado] = precio
            }
        }
    })
    return Object.values(productosAgrupados)
    
}