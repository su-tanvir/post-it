***
# Requisitos
- Git:  ^2.39.1
- Node: ^16.17.0
- Pnpm:  ^8.6.2

***
# Ejecución
Clonar el proyecto
```bash
git clone <project-link>
```
Ir al directorio del proyecto
```bash
cd <project-name>/backend
```
Generar variables de entorno del proyecto
```bash
cp .env.development .env
```
Instalar dependencias
```bash
pnpm install
```
Levantar el servidor
```bash
pnpm [run] start --port 8080
```
[Opcional] Ejecutar tests
```bash
pnpm run test
```

***
# Development roadmap
- <details><summary><strong>Setup inicial del proyecto</strong></summary>
  
  - Manual scaffolding node-ts project
  - Development tools: linter (eslint) + formatter (prettier) + editor config 
  - Despliegue del servidor en un hosting = <ins>Vercel</ins> 
  </details>

- <details><summary><strong>Proceso de desarrollo</strong></summary>

  - Implementación de un servidor web (http) con **Express**
  - **Estructura de proyecto / directorio en capas**: capas de MVC + service layer + ...
    - Controller: trata puntos de entrada de los recursos que ofrece el servidor
    - Models = database: operación CRUD contra BD
    - Services: controla lógicas (para que el controlador pueda distribuir la carga de trabajo)
    - Utils = helpers (p.e: llamados desde services)
    - ...
  
  - Definir de rutas (**routing**) mediante la arquitectura **API REST**
  - Comprobación de rutas (+documentación) con un cliente de prueba: **VSC Rest Client**
  
  - Comunicación con el gestor de BD: **mongoDB** (BD basada en documentos (de colección), sin relación, el esquema del documento es libre o no fijo)
      - <ins>DB para development</ins>
      - <ins>DB para production</ins>
    - Uso de **ORM mongoose** (en lugar del driver de mongoDB para interactuar y manipular la BD)

  - Validación manual de parámetros de entrada (a ser guardados en la BD)
    - Alternativa **express-validator**
  - Manejo de errores (simple)

</details>

***