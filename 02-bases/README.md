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

---

## **1. Zoneless en Angular**

### **¿Qué es?**
- En Angular, las **Zones** son un mecanismo que permite detectar cambios automáticamente en la aplicación.
- Una **Zone** es como un "contexto" que envuelve el código de tu aplicación y notifica a Angular cuando algo cambia (por ejemplo, eventos de usuario, peticiones HTTP, etc.), para que Angular actualice la vista.

### **Zoneless: ¿Por qué surge?**
- Las Zones son útiles, pero pueden ser **pesadas en términos de rendimiento**, ya que Angular tiene que revisar constantemente si algo ha cambiado.
- Con **Zoneless**, se elimina la dependencia de las Zones, lo que significa que Angular no usará este mecanismo automático para detectar cambios. En su lugar, los cambios deben ser manejados explícitamente.

### **¿Qué implica?**
- En un entorno **Zoneless**, tienes más control sobre cuándo y cómo Angular detecta cambios.
- Esto puede mejorar significativamente el rendimiento, especialmente en aplicaciones grandes o complejas, porque evitas el "overhead" de las Zones.
- Sin embargo, también significa que debes ser más consciente de cuándo necesitas decirle a Angular que actualice la vista.

---

## **2. Señales (Signals)**

### **¿Qué son?**
- Las **Señales** son un nuevo sistema de reactividad introducido en Angular (a partir de Angular 16).
- Son una forma de manejar el estado de manera eficiente y predecible, permitiendo que Angular sepa exactamente qué partes de la aplicación deben actualizarse cuando cambia un valor.

### **¿Cómo funcionan?**
- Una **señal** es una variable especial que puede ser observada. Cuando cambia su valor, Angular sabe automáticamente qué partes de la vista dependen de esa señal y las actualiza.
- A diferencia de las variables normales, las señales tienen un **mecanismo interno de seguimiento de dependencias**.

### **Ventajas:**
- **Rendimiento**: Solo las partes de la vista que dependen de una señal específica se actualizan, en lugar de verificar toda la aplicación.
- **Simplicidad**: Es más fácil rastrear y gestionar el estado de la aplicación.
- **Predecibilidad**: Las señales hacen que el flujo de datos sea más claro y fácil de entender.

---

## **3. Comparación entre Zoneless y Señales**

| Característica         | **Zoneless**                                   | **Señales**                              |
|------------------------|------------------------------------------------|------------------------------------------|
| **Propósito**          | Mejorar el rendimiento eliminando Zones        | Gestionar el estado de manera eficiente  |
| **Control de cambios** | Manual (tú decides cuándo actualizar la vista) | Automático (Angular sabe qué actualizar) |
| **Complejidad**        | Mayor responsabilidad para el desarrollador    | Más simple y declarativo                 |
| **Uso común**          | Optimización avanzada                          | Gestión del estado en componentes        |

---

### **4. Resumen Breve**
- **Zoneless**: Elimina la dependencia de las Zones para mejorar el rendimiento, pero requiere que gestiones manualmente la detección de cambios.
- **Señales**: Un nuevo sistema de reactividad que permite manejar el estado de manera eficiente y automática, mejorando el rendimiento y la claridad del código.

Ambos conceptos están diseñados para hacer que Angular sea más rápido y eficiente, pero no necesitas preocuparte por ellos demasiado al principio. Concéntrate en aprender los fundamentos de Angular, y luego podrás explorar estas características avanzadas cuando estés listo.

---

## **1. Señales Computadas (Computed Signals)**

#### **¿Qué son?**
- Las **señales computadas** son señales derivadas que dependen de otras señales.
- Su valor se calcula automáticamente basándose en el valor de una o más señales existentes.
- Cuando cambia alguna de las señales de las que depende, la señal computada se recalcula automáticamente.

### **¿Para qué sirven?**
- Son útiles para evitar la duplicación de lógica y mantener el estado sincronizado.
- Permiten definir valores que dependen de otros estados sin necesidad de actualizarlos manualmente.

---

## **2. Readonly Signals**

### **¿Qué son?**
- Una **Readonly Signal** es una señal que no puede ser modificada directamente desde fuera de su ámbito.
- Es útil cuando quieres exponer un estado de forma segura, pero no quieres permitir que otros componentes o servicios lo modifiquen.

### **¿Para qué sirven?**
- Proporcionan encapsulamiento y control sobre el estado.
- Evitan que partes de tu aplicación alteren accidentalmente el estado.

---

## **3. Comparación entre Señales Computadas y Readonly Signals**

| Característica  | **Señales Computadas**            | **Readonly Signals**                             |
|-----------------|-----------------------------------|--------------------------------------------------|
| **Propósito**   | Derivar valores de otras señales  | Exponer señales de forma segura sin modificarlas |
| **Modificable** | No, se recalculan automáticamente | No, son de solo lectura                          |
| **Uso común**   | Calcular valores derivados        | Encapsular estado para evitar cambios externos   |

---

### **4. Resumen Breve**
- **Señales Computadas**: Son señales derivadas que se recalculan automáticamente cuando cambian las señales de las que dependen.
- **Readonly Signals**: Son señales de solo lectura que permiten exponer un estado de forma segura sin permitir su modificación externa.

Ambas son herramientas poderosas para gestionar el estado de manera eficiente y predecible en Angular.

## Creacion de un componente en `Angular`

Crea el componente `navbar` en la carpeta app, incluye el `.ts`, `.html`, `.css` y `spec.ts`.

> Retorna la carpeta y se necesita estar en la raiz del proyecto.

```shell
ng g c navbar
``` 
