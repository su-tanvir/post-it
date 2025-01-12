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
    ```bash
    pnpm init
    pnpm [install|add] -D typescript @types/node
    # add TS configuration: manual || auto con compiler de ts: tsc --init > tsconfig.json
    # add script: la ejecución de script apunta a los binarios de node_modules/.bin
    pnpm start
    ```
  - Development tools: linter (eslint) + formatter (prettier) + editor config
    ```bash
    Linter + Formatter: ts-standard para reusar configs preestablecidas de este style-guide
    Tener vsc extensions instaladas (eslint + prettier)
    ```
  - Despliegue en un servidor hosting remoto (*serverless function*) con un *dominio* = <ins>Vercel</ins> 
  </details>

- <details><summary><strong>Proceso de desarrollo</strong></summary>
  
  - No es suficiente el uso de compilador *TSC* (solamente compila ts) para generar código de desarrollo, además se ha de usar **Babel**
  - La plataforma de infraestructura (vercel) se encarga de compilar toda la app

  - Implementación de un servidor web (http) con **Express**
    - Compilación y ejecución del server de manera automática: _ts-node-dev_ || nodemon || concurrently || --watch (+node 19)
    - Lectura de entorno de variables del proyecto: _ts-dotenv_
    - Uso de **CORS**: en este proyecto no haría falta porque el servidor no obtendrá recursos desde fuera del su propio dominio; en el caso que lo hiciera, se podría activar manualmente

      ```js
      // De manera nativa
      const headers = new Headers();
      headers.set("Access-Control-Allow-Origin", "*");
      return new Response("ok", { headers, status: 200 });

      // Con Express
      res.writeHead(200, { "Access-Control-Allow-Origin": "*" });
      ```

  - **Estructura de proyecto / directorio en capas**: capas de MVC + service layer + ...
    - Controller: trata puntos de entrada de los recursos que ofrece el servidor
    - Models = database: operación CRUD contra BD
    - Services: controla lógicas (para que el controlador pueda distribuir la carga de trabajo)
    - Utils = helpers (p.e: llamados desde services)
    - ...
  
  - Definir de rutas (**routing**) mediante la arquitectura **API REST**: API escalable, cada recurso debe tener una dirección única y una acción para tratarlo
    - Nota: CRUD no cumple exactamente el patrón REST
    - Comprobación de rutas (+documentación) con un cliente de prueba: **VSC Rest Client**

  - Comunicación con el gestor de BD: **mongoDB** (BD basada en documentos (de colección), sin relación, el esquema del documento es libre o no fijo)
    - BD en la nube (mongodb atlas as a persistence database): *Atlas cloud > Project > Mongodb cluster > Database > Collections*
      - <ins>DB para development</ins>
      - <ins>DB para production</ins>
    - **ORM mongoose**: uso de esquemas de colecciones para representar datos de la BD (en lugar del driver de mongoDB para interactuar y manipular la BD)

  - Validación manual de parámetros de entrada (a ser guardados en la BD)
    - Alternativa **express-validator**
  - Manejo de errores (simple)
  </details>

***