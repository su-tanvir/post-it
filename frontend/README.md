***
# Requisitos
- Git:  ^2.39.1
- Node: ^16.17.0
- Npm:  ^8.15.0

***
# Ejecución
Clonar proyecto
```bash
git clone <project-link>
```
Ir al directorio del proyecto
```bash
cd <project-name>/frontend
```
Generar variables de entorno del proyecto
```bash
cp .env.sample .env
```
Instalar dependencias
```bash
npm i
```
Levantar proyecto
```bash
npm [run] start --port 8000
```
[Opcional] Ejecutar tests
```bash
npm run test
```
[Opcional] Empaquetar proyecto para desplegar 
```bash
npm run build
```

***
# Development roadmap
- <details><summary><strong>Setup inicial del proyecto</strong></summary>
  
  - Scaffolding automático del proyecto con vite build tool (en lugar de *react-scripts*)
    ```bash
    # note: vite requires nodejs
    npm init vite@latest <frontend> -- --template react-ts
    cd <frontend>
    npm i && npm start
    ```
  - Development tools: linter (eslint) + formatter (prettier) + code styles (stylelint) + editor config (vsc)
    ```bash
    1) Linter: permite detectar/corregir errores + estandarizar el código con convenciones
      - usar linter ESlint (para código - test) + Stylelint (para estilos)
      - config manual del eslint para concretar reglas || usar configs preestablecidas de un linter específico (standard, semistandard, airbnb, ...) que por debajo usa el linter eslint
        - ejecutar linter al vuelo: npx eslint [options] [file|dir|glob]*
      - output (configs): .eslintrc.json, .eslintignore, ...

      - vsc extension: eslint, stylelint
      - instalar pkg o plugins necesarios para el correcto funcionamiento del linter

    2) Formatter: permite dar una forma al código para que quede limpio
      - usar prettier + configurar

    3) Config del proyecto para que apunte a estas tools (tsconfig)

    4) Config del editor or IDE para que use estas tools (.vscode/settings.json)
    ```
  - Unit testing
    ```bash
    1) JS Unit testing framework: Jest
      - config de jest
      - actualizar otras configs de eslint, proyecto, ...
      - instalar pkg o plugins necesarios para testear componentes de react
    2) JS End-to-end testing framework: Cypress
      - config
      - instalar pkg o plugins necesarios
    ```
  - Despliegue en un servidor hosting remoto (*serverless function*) con un *dominio* = <ins>Netlify</ins>
  </details>

- <details><summary><strong>Proceso de desarrollo</strong></summary>

  - Gestión de rutas del sistema con **router-dom v6**
  - Internacionalización con **i18n**: es | en | fr | bn
  - Estructura o directorio de estilos con **saas**
  - Uso de *design system* de **Material UI v5** (estilos muy marcados de Google)
  - Layout: <ins>Header + Main + Footer</ins>
  - **Theme**: manualmente light + dark
  - <ins>Home page</ins>
  - <details><summary><ins>Edit page</ins></summary>

    - Formulario: **generic fields + custom fields + actions**
    - Editar contenido/texto de manera interactiva
      - Idea 1: usar **input-text** (no acepta salto de linea), usar **textarea** (acepta multi-line pero no proporciona una buena experiencia de usuario)
      - Idea 2: usar componente **TextField** de MUI
      - Idea 3: hacer que las etiquetas html sean editables mediante el atributo **contentEditable** (pude dar conflicto con React por el update del estado en el DOM + sanitize-html)
          - Se puede usar el paquete **react-contenteditable**
          - Si el elemento a editar es **ul/ol**, React se quejará por las *keys* de *items*
    - *IconPicker* para gestionar la selección de icono
      - Uso de **emojis / icon**: symbol copy-paste || unicode number || html code (decimal) || hexadecimal
        - No se ha usado **MUI modal** para pintar los iconos porque este se renderiza fuera de *body* de la jerarquía html; se pierde la referencia a la hora renderizarlo en un sitio concreto, para ello, se ha creado una "modal" relativo que es capaz de colocarse relativamente a un elemento x.
    - <del>Aplicar acciones (Bold, Italic, Underline, Alignment, ...) a las palabras de input-text</del>
      - *document.execCommand* obsoleto, Selection API, Clipboard API: para commandos cut-copy-paste
    - Uso de **react-syntax-highligher** para destacar un código de programación
      - No es editable, se ha añadido una capa por encima para que simule que es editable (alternativa: **react-simple-code-editor**)
    - Drag and drop de **file-&-image** (se acepta un fichero)
      - Uso de *ref* de input-file para activar *FileChooser* del SO
      - Uso de *drag-and-drop html api* para arrasar elementos: drag-over, drag-enter, drag-leave, drop
        - Alternativa: [dropzone js](https://www.dropzone.dev/), [filepond](https://pqina.nl/filepond/)
    - **Preview** del post
    - Se ha evitado el uso de la librería **react-hook-form** para controlar y validar campos de un formulario: validación a pico y pala. No hay una validación exhaustiva: titulo es obligatorio + al menos tiene que haber un custom-field con valor.
    </details>
  - <details><summary><ins>Posts page</ins></summary>

    - Listar posts: uso de **skeleton** + **paginación**
    - Ver los detalles de un post
    </details>
  - Error page: **NotFound**
  - Aplicación de **SEO** manualmente (alternativa: **react-helmet**)
  - Uso de **tooltip sooner-toast** para mostrar mensajes informativos
  - Uso exhaustivo de **Context API** de react para evitar _props drilling_
    - La idea principal de Context consiste en tener accesibilidad a cierta información desde cualquier parte del árbol de elementos de React (no se puede comparar con un estado global de la app)
    - **Abstracción de estado global** en custom hooks
  - Setup de **alias** de rutas para evitar uso de *relative paths*
  - Otros: _void_ operator, role, tabIndex, onKeyDown, onKeyUp, stopPropagation, ...
</details>

***