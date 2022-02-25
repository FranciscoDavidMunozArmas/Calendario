# Frontend (_ReactJS_)

Dentro del frontend, se aplico ReactJS en su version para Typescript. En adicion, se usaron paquetes como `axios` para realizar peticiones, `toastify` para apartados como alertas, y `Material UI` para los estilos.

Se puede visualizar que la distibucion de carpetas se divide en:

### Classes
Se ubican los modelos y convertidores de JSON a objetos, de los datos JSON recibidos

### Components
Se ubican los componentes generados para la interfaz

### Context
Se ubican los proveedores de contexto

### Lib
Se ubican funciones utilies como `Error Handlers`, `Token Interceptor`, `Toast Manager`, entre otros

### Pages
Para una mejor organizacion los componentes de _React_ que fungen como paginas, fueron colocados dentro de esta carpeta, ademas de la subcarpeta `Subpages` que posee el mismo fin

### Services
Se ubican las conexiones realizadas a la API, junto con sus respectivos encabezados