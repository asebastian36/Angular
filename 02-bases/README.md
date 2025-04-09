# Notas

## Introduccion a Angular

Multi-plataforma:

* **Web**: SPA (single page application), SSR (static side generation), SSG.
* **Movil**: ionic, NativeScript.
* **Desktop**: Electron.

## Framework

Tiene todo lo necesario al abrirlo de la caja para crear aplicaciones completas:

* **Gestor de estado**
* **Enrutamiento**
* **Reactividad**
* **Peticiones HTTP**
* etc

> Todo se actualiza al pasar de version, no hay componentes atrasados o desfasados.

## Bloques fundamentales de Angular

[Bloques fundamentales de Angular](./images/bloques-fundamentales-angular.png)

### Componentes

Es una pieza que representa una parte de la interfaz de usuario.

> Puede ser desde un boton hasta una pantalla completa

* Logica (TS)
* Estilos - (SASS, CSS, etc) - opcional
* Plantilla HTML

### Rutas

Permiten cambiar paginas (components que usualmente cubren todo el punto de vista).

* Separar logica
* Control de acceso y autorizacion
* Estrategias de renderizado

### Directivas

Modifican el comportamiento de un elemento HTML

* atributo - `ngClass`, `NgStyle`...
* Estructurales - `ngIf`, `ngFor`...
* Componente - Personalizado

### Servicios

Encapsulan logica de negocio y centralizan su acceso.

* Gestion de datos
* Reutilizacion de codigo
* Inyeccion de dependencias

### Modulos

Agrupan funcionalidades relacionadas, permitiendo su uso en otros componentes o modulos.

* Organizan la aplicacion
* Encapsulan dependencias
* Facilitan la carga bajo demanda

### Pipes

Transforman datos de forma visual para representarlos apropiadamente en los componentes.

> Existen dos tipos de pipes, puros e impuros

* Modifican como se presentan datos
* Ordenar y filtrar
* Optimizacion de rendimiento

## Estructura de un proyecto Angular

> Para crear un proyecto Angular: `ng new nameProyect`

> `ng serve -o`: Para iniciar el proyecto en cuanto este listo.

### Archivos de configuracion

---

#### 📄 `angular.json`
Archivo de configuración principal del proyecto Angular.  
Define cómo se compila, construye, prueba y sirve la app (qué archivos usar, rutas, configuraciones para entornos, etc).

---

#### 📄 `package.json`
Lista las dependencias del proyecto, scripts de comandos (`npm start`, `npm test`, etc.) y metadatos (nombre del proyecto, versión, etc).  
Esencial para que `npm` sepa qué instalar.

---

#### 📄 `package-lock.json`
Registra las **versiones exactas** de las dependencias instaladas.  
Asegura que todos los que instalen el proyecto obtengan el mismo resultado.

---

#### 📄 `tsconfig.json`
Configuración general del compilador TypeScript.  
Define reglas comunes como versión de JS objetivo, paths, módulos, etc.

---

#### 📄 `tsconfig.app.json`
Hereda de `tsconfig.json`, pero está enfocado solo en **el código de la aplicación** (no pruebas).  
Se usa cuando se compila la app.

---

#### 📄 `tsconfig.spec.json`
También hereda de `tsconfig.json`, pero está destinado a los **tests unitarios**.  
Incluye archivos de prueba (`*.spec.ts`) y configuraciones necesarias para testear.

---

> `.editorconfig` configuracion de formato para Angular.

### `dist`

Directorio generado con el comando `ng build`, su contenido es para despliegue en la aplicacion.

### `public`

Para archivos multimedia o fuentes.

### `node_modules`

Dependencias del proyecto (npm).

### `.angular`

Permite mejorar la velocidad de ejecucion del proyecto al usar memoria cache (en local).

### `src`

* `styles.css`: Estilos globales.
* `index.html`: Vista de la aplicacion global.
* `main.ts`: Especifica a Angular como se necesita ejecutar la aplicacion, desde este archivo se empieza a generar la aplicacion.

#### `app`

`app.component.css` le da estilo al `app.component.html` solo de ese directorio, el `app.component.spec.ts` es para test y el `app.component.ts` en ese archivo se encuentra la logica del componente.

`app.config.ts` archivo de configuracion relacionado al JS o TS, `app.routes.ts` establece los endpoints con sus vistas.
