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
  
  - Scaffolding del proyecto con vite build tool (en lugar de *react-scripts*)
  - Developer tools: linter (eslint) + formatter (prettier) + code styles (stylelint) + editor config (vsc)
  - Unit testing configs
  - Despliegue en un servidor remoto (hosting) = <ins>Netlify</ins>
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
  - Uso exhaustivo de **Context API** de react para evitar *props drilling*
  - Setup de **alias** de rutas para evitar uso de *relative paths*
</details>

***