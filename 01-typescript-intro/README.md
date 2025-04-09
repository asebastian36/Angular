# Notas

## Explicacion del `main.ts`

---

### **1. `import './style.css'`**
```typescript
import './style.css';
```

- **Qué hace**: Importa un archivo CSS (`style.css`) en el proyecto.
    - Esto es común en proyectos modernos que usan herramientas como **Vite**, **Webpack** o **Parcel**, que permiten importar archivos de estilos directamente en JavaScript/TypeScript.
    - El archivo `style.css` contiene reglas de estilo (CSS) que se aplicarán globalmente al documento HTML.

- **Nota**: Este tipo de importación no asigna nada a una variable, ya que su propósito es cargar los estilos en el proyecto.

---

### **2. `const app = document.querySelector<HTMLDivElement>('#app')!;`**
```typescript
const app = document.querySelector<HTMLDivElement>('#app')!;
```

- **Qué hace**: Selecciona un elemento del DOM con el ID `app` y lo asigna a la constante `app`.
    - `document.querySelector`: Es un método que busca el primer elemento en el DOM que coincida con el selector proporcionado.
    - `#app`: Es un selector CSS que busca un elemento con el ID `app`.

#### **Detalles importantes:**
1. **`<HTMLDivElement>`**:
    - Es una anotación de TypeScript que indica que el resultado de `querySelector` será un elemento del tipo `HTMLDivElement`.
    - Esto mejora la seguridad de tipos y permite que TypeScript proporcione autocompletado y verificación de errores relacionados con elementos HTML específicos.

2. **`!` (Non-null assertion operator)**:
    - Indica que estamos seguros de que el elemento con ID `app` existe en el DOM.
    - Si el elemento no existe, TypeScript lanzaría un error porque `querySelector` puede devolver `null`. El operador `!` le dice a TypeScript: "Confía en mí, este valor no será `null`".

---

### **3. `app.innerHTML = 'Hello World!';`**
```typescript
app.innerHTML = 'Hello World!';
```

- **Qué hace**: Modifica el contenido interno del elemento seleccionado (`#app`) usando la propiedad `innerHTML`.
    - `innerHTML` permite establecer o modificar el contenido HTML dentro de un elemento.
    - En este caso, se está reemplazando el contenido del elemento `#app` con el texto `"Hello World!"`.

- **Resultado en el DOM**:
    - Si el elemento `#app` originalmente estaba vacío, ahora contendrá el texto `"Hello World!"`.

---

### **4. `console.log(app.innerHTML);`**
```typescript
console.log(app.innerHTML);
```

- **Qué hace**: Imprime el contenido actual del elemento `#app` en la consola del navegador.
    - `app.innerHTML` devuelve el contenido HTML dentro del elemento.
    - En este caso, imprimirá `"Hello World!"`, ya que ese es el contenido que acabamos de asignar.

---

### **5. Flujo completo del código**

1. **Importa estilos**:
    - El archivo `style.css` se carga y aplica al documento HTML.

2. **Selecciona el elemento `#app`**:
    - Usa `document.querySelector` para encontrar el elemento con ID `app` en el DOM.
    - Asegura que el elemento existe usando el operador `!`.

3. **Modifica el contenido del elemento**:
    - Asigna el texto `"Hello World!"` al contenido interno del elemento `#app` usando `innerHTML`.

4. **Imprime el contenido en la consola**:
    - Muestra el contenido actual del elemento `#app` en la consola del navegador.

---

### **6. Resumen**

Este código hace lo siguiente:
1. Importa estilos desde un archivo CSS.
2. Selecciona un elemento del DOM con el ID `app`.
3. Modifica el contenido del elemento para mostrar `"Hello World!"`.
4. Imprime el contenido del elemento en la consola del navegador.

## Explicacion de la estructura del proyecto

 Proyecto básico generado con **Vite**, una herramienta de desarrollo moderna para crear aplicaciones web rápidas y eficientes. A continuación, explicaré cada carpeta y archivo en detalle:

---

### **1. Estructura general del proyecto**

Aquí tienes el árbol de carpetas y archivos:

```
01-typescript-intro
├── .idea                  # Carpeta generada por IntelliJ IDEA (opcional)
├── node_modules           # Carpeta donde se instalan las dependencias del proyecto
├── public                # Contiene recursos estáticos como imágenes, iconos, etc.
│   └── index.html        # Archivo HTML principal
├── src                   # Carpeta que contiene el código fuente del proyecto
│   ├── main.ts           # Archivo principal de TypeScript
│   ├── style.css         # Hoja de estilos CSS
│   ├── typescript.svg    # Imagen relacionada con TypeScript
│   └── vite-env.d.ts     # Definiciones de entorno para Vite
├── .gitignore            # Configuración para ignorar archivos/directorios en Git
├── package.json          # Metadatos del proyecto y sus dependencias
├── package-lock.json      # Registro detallado de las versiones exactas de las dependencias
├── README.md             # Documentación del proyecto
└── tsconfig.json         # Configuración de TypeScript
```

---

### **2. Descripción detallada de cada carpeta y archivo**

#### **`.idea`**
- **Qué es**: Esta carpeta es generada automáticamente por **IntelliJ IDEA**, un IDE popular para desarrollo de software.
- **Propósito**: Almacena configuraciones específicas del proyecto para IntelliJ IDEA, como ajustes de formato de código, marcadores, etc.
- **Opcional**: No es parte del proyecto TypeScript ni Vite, pero puede ser útil si usas IntelliJ IDEA.

#### **`node_modules`**
- **Qué es**: Carpeta donde se instalan todas las dependencias del proyecto definidas en `package.json`.
- **Propósito**: Almacena bibliotecas y paquetes necesarios para ejecutar el proyecto.
- **Automático**: Se genera al ejecutar `npm install` o `yarn install`.

#### **`public`**
- **Qué es**: Carpeta que contiene recursos estáticos que no son procesados por TypeScript o Vite.
- **Contenido**:
    - **`index.html`**: Archivo HTML principal donde se carga la aplicación.
        - Es el punto de entrada del navegador.
        - Contiene referencias a los scripts y estilos generados por Vite.
    - Otros recursos estáticos como imágenes, iconos, fuentes, etc.

#### **`src`**
- **Qué es**: Carpeta que contiene el código fuente del proyecto.
- **Contenido**:
    - **`main.ts`**: Archivo principal de TypeScript donde comienza la lógica de la aplicación.
        - Aquí se define la lógica JavaScript/TypeScript que se ejecutará en el navegador.
    - **`style.css`**: Hoja de estilos CSS para dar formato al contenido HTML.
    - **`typescript.svg`**: Imagen relacionada con TypeScript (probablemente usada para fines visuales).
    - **`vite-env.d.ts`**: Definiciones de entorno para Vite.
        - Proporciona tipos para variables de entorno (`import.meta.env`) que pueden ser usadas en el proyecto.

#### **`.gitignore`**
- **Qué es**: Archivo que especifica qué archivos o directorios deben ser ignorados por Git.
- **Contenido común**:
    - `node_modules`: Evita subir las dependencias instaladas localmente.
    - `.idea`: Ignora configuraciones específicas del IDE.
    - Otros archivos temporales o específicos del entorno de desarrollo.

#### **`package.json`**
- **Qué es**: Archivo de metadatos del proyecto.
- **Contenido**:
    - **`name`**: Nombre del proyecto.
    - **`version`**: Versión actual del proyecto.
    - **`scripts`**: Comandos de npm para tareas comunes (como `dev`, `build`, etc.).
    - **`dependencies`**: Dependencias de producción (usadas en el entorno de producción).
    - **`devDependencies`**: Dependencias de desarrollo (usadas solo durante el desarrollo).

#### **`package-lock.json`**
- **Qué es**: Archivo generado automáticamente por npm que registra las versiones exactas de las dependencias del proyecto.
- **Propósito**: Garantiza que todos los desarrolladores del equipo obtengan las mismas versiones de las dependencias al ejecutar `npm install`.

#### **`README.md`**
- **Qué es**: Archivo Markdown que sirve como documentación del proyecto.
- **Contenido común**:
    - Descripción del proyecto.
    - Instrucciones para clonar, instalar dependencias y ejecutar el proyecto.
    - Licencia del proyecto.

#### **`tsconfig.json`**
- **Qué es**: Archivo de configuración para TypeScript.
- **Contenido**:
    - Define cómo TypeScript debe compilar y verificar el código.
    - Ejemplos de opciones comunes:
        - **`compilerOptions`**: Configura opciones como el destino de compilación (`target`),strict mode, etc.
        - **`include`**: Indica qué archivos deben ser incluidos en la compilación.
        - **`exclude`**: Indica qué archivos deben ser excluidos de la compilación.

---

### **3. Flujo general del proyecto**

1. **Desarrollo**:
    - Editas los archivos en la carpeta `src` (por ejemplo, `main.ts` y `style.css`).
    - Vite monitoriza cambios en tiempo real y recarga automáticamente el navegador cuando hay modificaciones.

2. **Compilación**:
    - Cuando ejecutas `npm run build` o `yarn build`, Vite compila el código TypeScript en JavaScript y optimiza los recursos estáticos.
    - Los archivos resultantes se colocan en una carpeta de salida (generalmente `dist` o `build`).

3. **Ejecución**:
    - Para ejecutar el proyecto en modo desarrollo, puedes usar `npm run dev` o `yarn dev`.
    - Esto inicia un servidor de desarrollo que sirve los archivos del proyecto y permite ver los cambios en tiempo real.

---

### **4. Resumen de la estructura**

| Carpeta/Archivo     | Descripción                                         |
|---------------------|-----------------------------------------------------|
| `.idea`             | Configuraciones específicas de IntelliJ IDEA.       |
| `node_modules`      | Dependenacias instaladas del proyecto.              |
| `public`            | Recursos estáticos como HTML, imágenes, etc.        |
| `src`               | Código fuente del proyecto (TypeScript, CSS, etc.). |
| `.gitignore`        | Archivos/directorios a ignorar en Git.              |
| `package.json`      | Metadatos del proyecto y dependencias.              |
| `package-lock.json` | Registra las versiones exactas de las dependencias. |
| `README.md`         | Documentación del proyecto.                         |
| `tsconfig.json`     | Configuración de TypeScript.                        |
