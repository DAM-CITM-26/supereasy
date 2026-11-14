
# AGENTS.md · Supereasy · DAM 2026-27

## Quiénes somos

Somos un equipo de estudiantes de DAM que estamos aprendiendo React y desarrollando Supereasy a partir de una referencia realizada en HTML, CSS y JavaScript. En este proyecto solo podemos utilizar las herramientas y conceptos que se hayan trabajado en clase durante el sprint correspondiente.

Si una funcionalidad necesita una técnica que todavía no hemos aprendido, debes explicárnoslo y proponernos una alternativa que podamos implementar con los conocimientos permitidos.

## Stack

- **Framework:** React con Vite.
- **Lenguaje:** JavaScript, utilizando archivos `.jsx`. No utilizar TypeScript.
- **Estilos:** CSS basado en la referencia del proyecto, situado en `src/index.css`.
- **Componentes:** `src/components/`. Aquí se guardan los componentes reutilizables.
- **Pantallas:** `src/pages/`. Aquí se guarda cada pantalla de la aplicación.
- **Datos:** `src/data/`. Aquí se guardan los datos estáticos de ejemplo.
- **Funciones:** `src/utils/`. Aquí se guardan las funciones de lógica independientes de la interfaz.
- **Documentación:** `docs/`. Aquí se guarda la documentación del modelo de datos y de los componentes.

No instales dependencias nuevas sin preguntarnos antes y recibir nuestra aprobación.

## Permitido (hasta el Sprint 1)

- React con componentes funcionales.
- JSX para construir la interfaz.
- JavaScript.
- Props para pasar información entre componentes.
- Callbacks para comunicar acciones de los componentes hijos al componente padre.
- `useState` para gestionar el estado de la interfaz.
- Eventos de React.
- Renderizado de listas y condiciones en JSX.
- Funciones puras para trabajar con los datos.
- Datos estáticos de ejemplo.
- CSS para dar estilo a los componentes.
- Organización del proyecto mediante las carpetas definidas.

### Funcionalidades del Sprint 1

- Mostrar productos mediante tarjetas.
- Mostrar el nombre, categoría, cantidad y precios de cada producto.
- Calcular el precio más bajo de cada producto.
- Identificar el supermercado que ofrece el precio más bajo.
- Filtrar productos por supermercado.
- Filtrar productos por precio máximo.
- Ordenar productos por precio o por nombre.
- Mantener el estado de los filtros y del orden en la pantalla principal.
- Pasar los datos y las opciones de filtrado a los componentes mediante props.
- Utilizar callbacks para comunicar las acciones de los componentes hijos a la pantalla principal.

## Prohibido

### Siempre prohibido

- `document.querySelector`.
- `document.querySelectorAll`.
- `innerHTML`.
- `addEventListener`.
- Manipular directamente el DOM para actualizar la interfaz.
- Modificar manualmente elementos HTML desde JavaScript.
- Instalar dependencias sin autorización.

### Hasta que se trabaje en clase

- **Sprint 2:** React Router, `BrowserRouter`, `Routes`, `Route`, `Link`, `NavLink`, `useParams` y `useNavigate`.
- **Sprint 2:** consumo de APIs externas, incluyendo Open Food Facts.
- **Sprint 2:** funcionalidades de búsqueda y páginas de detalle de producto.
- **Sprint 2:** gestión de estados de carga y errores de las peticiones.
- **Sprint 3:** Context API y `useContext`.
- **Sprint 3:** `localStorage`.
- **Sprint 3:** gestión completa de la cesta y del presupuesto.
- **Sprint 3:** pruebas con Vitest.

No adelantes estas tecnologías ni las utilices antes de que estén permitidas en clase.

## Cómo tiene que responder

- Antes de escribir código, presenta un plan de entre 3 y 5 líneas explicando qué vas a hacer y qué concepto de clase utilizarás.
- Trabaja una pieza cada vez. No desarrolles una pantalla completa sin que te lo pidamos.
- Explica el código de forma clara para que podamos entenderlo y defenderlo.
- Utiliza únicamente las herramientas permitidas en el sprint actual.
- Si una solución necesita una herramienta no permitida, avísanos y propón una alternativa.
- Cuando revises nuestro código, señala los errores y explica cómo solucionarlos. No reescribas todo el código si no es necesario.
- No añadas dependencias ni cambies la estructura del proyecto sin consultarnos.
- Las props propias deben tener nombres diferentes de los eventos nativos de React. Por ejemplo, utiliza `onCambio` en lugar de `onChange` para callbacks propios.
- No inventes funcionalidades ni modifiques partes que no hayamos solicitado.

### Mensajes de commit

Cuando propongas un commit, utiliza este formato:

- **Qué:** qué se ha modificado.
- **Por qué:** por qué se ha realizado el cambio.
- **Cómo:** cómo se ha implementado.
- **Referencia:** parte de la referencia del proyecto relacionada.
- **Concepto:** concepto de clase utilizado.
- **IA:** cómo se ha utilizado la IA, si corresponde.

## Nuestro proyecto

- **App:** Supereasy — aplicación para comparar productos y precios entre diferentes supermercados.
- **Equipo:** Malcom Industries.
- **Referencia:** https://dam-citm-26.github.io/referencias/supereasy/
- **Repositorio de referencias:** https://github.com/DAM-CITM-26/referencias

### Pantallas del sprint en curso

- **Pantalla principal:** listado de productos.
- **Tarjetas de producto:** información de cada producto y sus precios.
- **Filtros:** selección de supermercado y precio máximo.
- **Ordenación:** ordenar los productos por precio o nombre.

La barra de navegación con pestañas y las demás pantallas se desarrollarán en los siguientes sprints, cuando estén permitidas.

### Modelo de datos

La documentación del modelo de datos se encuentra en `docs/datos.md`.

Entidades principales:

**Producto**
- `id`: identificador del producto.
- `name`: nombre del producto.
- `category`: categoría.
- `quantity`: cantidad.
- `unit`: unidad de medida.
- `prices`: precios del producto en los diferentes supermercados.

**Supermercado**
- `name`: nombre del supermercado.

**Cesta**
- `products`: lista de productos y cantidades.
- `budget`: presupuesto disponible.

La cesta se desarrollará cuando corresponda en el Sprint 3.

### Componentes de cada pantalla

La documentación de los componentes se encuentra en `docs/componentes.md`.

Los componentes deben ser reutilizables siempre que tenga sentido y deben recibir la información mediante props.

## Lo que hemos aprendido

Añadiremos aquí las reglas que debamos recordar cuando la IA cometa errores o proponga soluciones que no se ajusten al proyecto.

- No utilizar técnicas que todavía no se hayan trabajado en clase.
- El estado de los filtros y de la ordenación debe gestionarse desde la pantalla principal.
- Las funciones que trabajan con los datos deben estar separadas de los componentes visuales.
- Los componentes hijos deben comunicar las acciones al componente padre mediante callbacks.


